import type { Request } from "express";

export type AdminRole = "super_admin" | "admin" | "sales" | "tour_manager" | "guide" | "finance" | "support" | "read_only";
export type Permission = "crm:read" | "crm:write" | "clients:write" | "gallery:write" | "finance:read" | "security:read" | "publish:write";

export type AuditEvent = {
  id: number;
  action: string;
  actorRole: AdminRole;
  targetType: string;
  targetId?: number | string;
  details: string;
  createdAt: string;
  ip?: string;
};

const rolePermissions: Record<AdminRole, Permission[]> = {
  super_admin: ["crm:read", "crm:write", "clients:write", "gallery:write", "finance:read", "security:read", "publish:write"],
  admin: ["crm:read", "crm:write", "clients:write", "gallery:write", "finance:read", "security:read", "publish:write"],
  sales: ["crm:read", "crm:write", "clients:write"],
  tour_manager: ["crm:read", "crm:write", "clients:write", "gallery:write"],
  guide: ["crm:read"],
  finance: ["crm:read", "finance:read"],
  support: ["crm:read", "crm:write", "clients:write"],
  read_only: ["crm:read"],
};

let auditId = 1;
let auditLogs: AuditEvent[] = [
  {
    id: auditId++,
    action: "security.bootstrap",
    actorRole: "admin",
    targetType: "system",
    details: "Enterprise CRM security layer loaded. Configure ADMIN_ACCESS_CODE on Railway before public launch.",
    createdAt: new Date().toISOString(),
  },
];

function headerValue(req: Request | undefined, name: string) {
  const value = req?.headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}

export function hasPermission(role: AdminRole, permission: Permission) {
  return rolePermissions[role]?.includes(permission) ?? false;
}

export function getAdminAccessState(req?: Request) {
  const configured = Boolean(process.env.ADMIN_ACCESS_CODE);
  const providedCode = headerValue(req, "x-admin-access-code") || "";
  const providedRole = headerValue(req, "x-admin-role") as AdminRole | undefined;
  const role = providedRole && rolePermissions[providedRole] ? providedRole : configured ? "super_admin" : "admin";
  const authorized = configured ? providedCode === process.env.ADMIN_ACCESS_CODE : true;

  return {
    configured,
    authorized,
    setupMode: !configured,
    role,
    permissions: rolePermissions[role],
    expiresInMinutes: Number(process.env.ADMIN_SESSION_MINUTES || 60),
    warning: configured ? "Admin access code is configured." : "Setup mode is active. Add ADMIN_ACCESS_CODE in Railway variables before public launch.",
  };
}

export function assertPermission(req: Request | undefined, permission: Permission) {
  const state = getAdminAccessState(req);
  if (!state.authorized) {
    throw new Error("Admin access denied. Add the correct admin access code.");
  }
  if (!hasPermission(state.role, permission)) {
    throw new Error("Permission denied for " + permission + ".");
  }
  return state;
}

export function recordAudit(req: Request | undefined, action: string, targetType: string, details: string, targetId?: number | string) {
  const state = getAdminAccessState(req);
  const entry: AuditEvent = {
    id: auditId++,
    action,
    actorRole: state.role,
    targetType,
    targetId,
    details,
    createdAt: new Date().toISOString(),
    ip: headerValue(req, "x-forwarded-for") || req?.ip,
  };
  auditLogs = [entry, ...auditLogs].slice(0, 500);
  return entry;
}

export function listAuditLogs() {
  return auditLogs;
}

export function getRoleMatrix() {
  return rolePermissions;
}
