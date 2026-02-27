# Objective
Fix Netlify 404 error by adding SPA redirect rules and ensuring static build works for deployment on Netlify or Cloudflare Pages.

# Tasks

### T001: Add Netlify/CF Pages redirect rules
- **Blocked By**: []
- **Details**:
  - Create `client/public/_redirects` with `/* /index.html 200` rule for Netlify SPA routing
  - This file will be copied to `dist/public/` during build automatically by Vite
  - Acceptance: File exists in `client/public/_redirects` and contains the redirect rule

### T002: Verify static build works
- **Blocked By**: [T001]
- **Details**:
  - Run `npx vite build --config vite.config.ts` to produce the static site in `dist/public/`
  - Confirm `_redirects`, `favicon.svg`, resume files, and `index.html` are all in the output
  - Acceptance: Build completes successfully and all files are present in `dist/public/`
