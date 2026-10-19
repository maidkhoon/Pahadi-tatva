# Technical Design

## Proposed architecture
- Frontend: React, TypeScript, Vite, responsive PWA.
- Identity/data: Supabase Auth + PostgreSQL + Row Level Security.
- Files: private Supabase Storage buckets with signed URLs.
- Version control and quality checks: GitHub and GitHub Actions.
- Later API integration: server-side Edge Functions/webhook handlers, never browser-held provider secrets.

## Design principles
1. Server/database permissions are authoritative; UI visibility is not security.
2. Supplier data access is limited to that supplier's own records.
3. Every inbound external event has a provider/event identifier and idempotent processing.
4. Orders have an explicit source channel and confirmation state.
5. Inventory changes are ledger entries; do not silently overwrite stock counts.
6. Quality approval is an explicit authorised action with reviewer, timestamp, evidence, and audit log.
7. A collection record is not automatically saleable inventory.

## Planned front-end structure
- src/app: router and app providers
- src/components: reusable visual components
- src/layouts: authenticated and public layouts
- src/pages: route-level pages
- src/features: suppliers, lots, quality, inventory, CRM, orders, channels
- src/lib: Supabase client and utilities
- src/types: shared TypeScript types

## Environment
Use VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local. The Supabase anon/publishable key is designed for client use only when RLS is correctly configured. Never expose service_role/secret keys in VITE_ variables or commit secrets.

## Hosting
Select low-cost hosting after local checks. No deployment is currently configured.
