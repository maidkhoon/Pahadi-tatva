# Product Requirements — Pahadi Tatva Business OS

## Goal
Provide one system to manage ghee sourcing from household suppliers through acceptance, packing, stock, direct customer sales, retailer orders, and social-channel enquiries.

## Pilot constraints
- Total business pilot budget: ₹15,000.
- Typical initial supply: around 5–10 kg/week.
- Supplier lots stay separate initially.
- Actual purchase price varies by household; do not hard-code ₹800/kg as a universal rate.
- Social sales strategy is hybrid: manual capture first, official APIs later.

## Roles
- Owner: all operational data, approvals, reports, configuration.
- Staff: assigned operational workflows; no privileged configuration unless granted.
- Supplier: only own profile, submissions and permitted lot information.
- Customer: own profile and own orders only.

## MVP modules
1. Authentication and role-aware navigation.
2. Supplier registry and supplier documents.
3. Collection lots and source traceability.
4. Quality/compliance review; lots are blocked from sale until authorised release.
5. Packaging batches and stock ledger.
6. Customer/retailer CRM and orders.
7. Website product catalogue/checkout.
8. Manual WhatsApp, Instagram and Facebook enquiry capture.
9. Expenses, payments, audit trail and basic reports.

## Manual versus API-enabled social features
### Initial manual phase
- Website orders create records through website checkout.
- WhatsApp uses click-to-chat and staff records confirmed orders.
- Instagram bio/product links route customers to the website or WhatsApp.
- Instagram DMs and Facebook Page/Messenger enquiries are manually recorded.
- A message/enquiry alone is not an order; staff records customer confirmation.
- The dashboard stores source channel, enquiry status and follow-up owner.

### Later official API phase
- WhatsApp Business Platform webhook intake and supported interactive flows.
- Instagram Messaging API for eligible professional accounts.
- Facebook Messenger API for eligible Pages.
- Webhook verification, idempotent event processing, permission-aware messages and delivery status.
- Go live only after eligibility, approvals, consent flows, cost review and end-to-end tests.

## Non-functional requirements
- Responsive mobile-first UI and installable PWA.
- Database-enforced access control and Supabase RLS.
- Audit records for quality releases, stock adjustments and order status changes.
- No negative stock; idempotent order/stock operations.
- Trace each packaged unit/order back to one or more source lots.
- Private compliance-document storage and time-limited signed access.
- Backups and documented recovery procedure.

## Out of scope for first sprint
Payments provider integration, automatic social API ingestion, marketing automation, complex analytics, native mobile apps, and inventory purchasing automation.
