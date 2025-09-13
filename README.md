# InnerStrong – Netlify CMS + Eleventy

## Prereqs
- Node.js 18+
- Git + GitHub account

## Local dev
```bash
npm install
npm run start
```
Site runs at `http://localhost:8080`.

## Build
```bash
npm run build
```
Output goes to `/_site`.

## Deploy (GitHub + Netlify)
- Push this repo to GitHub.
- In Netlify: New site from Git → connect repo → deploy (command and publish dir are set).
- Enable Identity → invite yourself → enable Git Gateway.
- Visit `/admin/` to log in and edit.
