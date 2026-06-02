import { afterEach, describe, expect, it } from "vitest";
import { assertPermission, getAdminAccessState, hasPermission } from "./adminSecurity";

describe("admin security", () => {
  afterEach(() => {
    delete process.env.ADMIN_ACCESS_CODE;
  });

  it("allows setup mode until an access code is configured", () => {
    const state = getAdminAccessState({ headers: {} } as any);
    expect(state.setupMode).toBe(true);
    expect(state.authorized).toBe(true);
    expect(hasPermission(state.role, "crm:read")).toBe(true);
  });

  it("requires the configured admin access code", () => {
    process.env.ADMIN_ACCESS_CODE = "secret-code";
    expect(getAdminAccessState({ headers: { "x-admin-access-code": "secret-code" } } as any).authorized).toBe(true);
    expect(getAdminAccessState({ headers: { "x-admin-access-code": "wrong" } } as any).authorized).toBe(false);
    expect(() => assertPermission({ headers: { "x-admin-access-code": "wrong" } } as any, "crm:read")).toThrow("Admin access denied");
  });
});
