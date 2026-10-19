# Local Development and Deployment

## Prerequisites
- Node.js (LTS recommended), npm, Git.
- Supabase project only when database/auth work begins.

## Local setup
1. Clone the repository.
2. Run npm install after the Vite application scaffold and package.json are committed.
3. Copy .env.example to .env.local and fill in the public project URL and anon/publishable key only after Supabase is configured.
4. Run npm run dev.
5. Run npm run build and the available test/lint scripts before submitting changes.

## Deployment
No hosting provider, production environment, DNS, secrets, or deployment has been configured yet. Choose a provider only after the app builds locally and environment variables/RLS are checked.
