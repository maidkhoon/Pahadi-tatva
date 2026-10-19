# Security Baseline

- Supabase Row Level Security required on every table accessible from the client.
- Enforce roles and row ownership in database policies/functions.
- Do not commit .env.local, access tokens, private customer data, supplier documents or service-role keys.
- Keep provider tokens in server-side secrets; never in VITE_ variables.
- Store compliance documents in private buckets, with short-lived signed URLs.
- Record audit events for role changes, approvals, stock corrections, and critical order transitions.
- Verify external webhook signatures and deduplicate event IDs.
- Limit access to supplier and customer personal data; establish retention and deletion practices.
- Keep test fixtures fictitious.
- Before production: test RLS as owner, staff, supplier, customer and unauthenticated user; backup and restore test; dependency/security review.
