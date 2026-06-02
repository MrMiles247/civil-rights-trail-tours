# Enterprise CRM Audit and Upgrade Notes

Repository: MrMiles247/civil-rights-trail-tours
Live site: https://civil-rights-trail-tours-production-6104.up.railway.app
Admin entry: /admin

## Current production posture

The site is a Vite React application with an Express/tRPC backend and Railway deployment from GitHub main. The public tour site, tour gallery, and admin CRM are served from the same application.

The CRM started as an in-memory admin module for clients, gallery media, checks, and a GitHub/Railway publish action. This pass upgrades the structure to an enterprise-style command center while preserving the existing deployment model.

## Implemented in this pass

### P0 security and authorization foundation

- Added server-side admin access state in server/adminSecurity.ts.
- Added role and permission matrix for super admin, admin, sales, tour manager, guide, finance, support, and read-only users.
- Added permission checks on CRM reads, client writes, gallery writes, finance reads, security reads, and publish writes.
- Added audit log recording for create/update/delete/export/publish actions.
- Added browser header support for x-admin-access-code and x-admin-role.
- Added setup-mode behavior so Railway does not lock out the admin UI until ADMIN_ACCESS_CODE is configured.

Required production action: set ADMIN_ACCESS_CODE in Railway variables before treating /admin as private.

### CRM modules

- Contacts and client pipeline with lead stage, assigned owner, lifecycle value, next step, accessibility notes, and duplicate-risk detection.
- Organizations/accounts for schools, churches, corporate groups, nonprofits, families, and travel agencies.
- Deals and pipeline value tracking.
- Admin booking operations for quote, reserved, confirmed, completed, and cancelled tours.
- Tasks with owner, due date, priority, and status.
- Invoices and finance visibility.
- Email templates for sales and booking follow-up.
- Gallery media manager for photos and videos.
- Dashboard metrics for clients, leads, pipeline value, bookings, revenue exposure, media, checks, and tasks.
- Contacts CSV export endpoint.

### Admin UI

- Replaced the basic admin page with a tabbed command center.
- Added dashboard, contacts, pipeline, bookings, tasks, gallery, finance, and audit tabs.
- Added global contact search.
- Added admin access-code entry using sessionStorage.
- Preserved the bottom-left Push to GitHub & Railway button.
- Preserved gallery management for photos and videos.

## Known gaps before true enterprise production use

These are intentionally documented instead of hidden.

1. Data persistence: CRM records are still in memory and will reset on Railway restarts. Move these models into Drizzle/MySQL tables before relying on them as the system of record.
2. Authentication UX: The server supports an ADMIN_ACCESS_CODE gate, but a full login screen, password rotation, invitation flow, and recovery flow are still needed.
3. Row-level authorization: Current permission checks are role-level. Row ownership rules should be added before multiple staff members manage private client records.
4. File uploads: Gallery records accept URLs. A production media manager should upload to object storage such as S3, Cloudflare R2, or Railway volumes with malware/type checks.
5. PII compliance: Client/contact data is personally identifiable information. Add retention policy, backups, encrypted storage, and export/delete workflows.
6. Payment workflow: Invoices are modeled but not connected to a payment processor.
7. Automated CI: GitHub Actions should run typecheck, test, lint, and build on every push.
8. Observability: Add server-side error logging, request tracing, and deployment health checks.

## Railway configuration checklist

- ADMIN_ACCESS_CODE: required before public launch of /admin.
- ADMIN_SESSION_MINUTES: optional, defaults to 60.
- DATABASE_URL: required when CRM persistence is moved from memory to MySQL.
- Add a GitHub Action or Railway predeploy command that runs npm run check and npm run build.

## Recommended next implementation pass

1. Create Drizzle schema and migrations for contacts, organizations, deals, bookings, tasks, invoices, media, audit logs, admin users, roles, and sessions.
2. Replace in-memory CRM store with database-backed repositories.
3. Add dedicated /admin/login and session cookies with httpOnly, secure, sameSite protection.
4. Add object-storage uploads for gallery photos and videos.
5. Add CI checks and smoke tests for /, /gallery, and /admin.
