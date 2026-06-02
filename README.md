# Civil Rights Trail Tours

Public tour website and admin CRM for Civil Rights Trail Tours.

Live site: https://civil-rights-trail-tours-production-6104.up.railway.app
Admin CRM: https://civil-rights-trail-tours-production-6104.up.railway.app/admin
Tour gallery: https://civil-rights-trail-tours-production-6104.up.railway.app/gallery

## Admin CRM

The `/admin` workspace includes:

- Enterprise dashboard and operational checks
- Contacts and lead pipeline
- Organizations/accounts
- Deals and pipeline value
- Admin booking records
- Tasks and follow-ups
- Gallery photo/video manager
- Invoice and email-template views
- Security and activity audit log
- Bottom-left publish button for the GitHub to Railway workflow

## Production Security

Set `ADMIN_ACCESS_CODE` in Railway before public launch of `/admin`. While that variable is missing, the CRM runs in setup mode so the deployment remains accessible during configuration.

Optional variable: `ADMIN_SESSION_MINUTES`.

## Development Commands

```bash
npm install
npm run dev
npm run check
npm run test
npm run build
```

## Deployment

GitHub main is connected to Railway. Pushes to GitHub trigger Railway deployment. The admin publish button records a publish request and reminds operators that the GitHub to Railway deployment path is active.

## Audit

See `ENTERPRISE_CRM_AUDIT.md` for the enterprise CRM audit, implemented controls, and remaining production-hardening checklist.
