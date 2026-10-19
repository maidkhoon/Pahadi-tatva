# Implementation Plan

## Sprint 1 — Foundation
- Create React + TypeScript + Vite frontend scaffold.
- Add routing, shared layout, navigation and responsive design.
- Create Supabase client configuration guarded for missing env variables.
- Define profiles/roles and protected-route behaviour.
- Add CI for install, lint/typecheck and build.
- Do not use production customer/supplier data.

## Sprint 2 — Supplier, lot and quality workflows
- Supplier registry and private documents.
- Collection lot records with variable purchase rate.
- Quality test/document references.
- Explicit approval/rejection workflow; do not show unapproved stock as saleable.

## Sprint 3 — Packaging and sales
- Packaging batches and source-lot links.
- Inventory movement ledger with no-negative-stock rule.
- Customer and retailer CRM, orders, payments and expenses.
- Website catalogue and checkout.

## Sprint 4 — Manual social commerce
- Enquiry inbox and channel source.
- Manual WhatsApp/Instagram/Facebook entry and follow-up states.
- Convert confirmed enquiries to orders with duplicate protection.
- Message templates that staff can copy and send manually.

## Later — Official API integrations
- Check live Meta documentation and account eligibility.
- Configure Meta app, account permissions, privacy policy, webhook endpoint/secrets.
- Implement and test one channel at a time, beginning with WhatsApp Business Platform.
- Verify event signature, retries, idempotency, customer consent, allowed messaging and failure handling before enabling.
