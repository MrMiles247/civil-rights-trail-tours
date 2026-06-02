# Codex Project Workflow Rules

These rules capture the owner's standing instructions for this site.

## After every requested change

1. Commit and push the completed change to GitHub main.
2. Let Railway auto-deploy from GitHub.
3. Run error checks before reporting done:
   - confirm the changed route renders
   - confirm /admin loads when admin/CRM code changes
   - confirm no obvious runtime error appears in the browser
   - confirm Railway deployment reaches an online state when available
4. Report the live URL and any known limitation.

## Admin CRM publishing

The /admin CRM includes a bottom-left Push to GitHub & Railway button. The button records a publish request and runs backend checks. Actual source-code deploys still happen through the GitHub to Railway connection, so persistent code changes must be committed to GitHub.

## Current deployment

- GitHub: https://github.com/MrMiles247/civil-rights-trail-tours
- Railway project: https://railway.com/project/f7dc1312-89aa-4359-a387-7b3ae22351e5
- Live site: https://civil-rights-trail-tours-production-6104.up.railway.app
