# Pahadi Tatva Business OS

Business operations platform for Pahadi Tatva, starting with cow ghee sourcing, batch traceability, quality/compliance records, inventory, customer and retailer orders, and social-channel order capture.

## Current phase

Planning and foundation. This repository is being prepared for a staged MVP. No production deployment or social API connection is implied by this README.

## Pilot strategy

- Keep the initial pilot budget at ₹15,000.
- Prioritize food-safety/compliance verification, suitable lab testing, and packaging trials.
- Start with manual WhatsApp, Instagram, and Facebook enquiry capture plus website orders.
- Add official WhatsApp Business Platform, Instagram Messaging, and Facebook Messenger APIs later, after account eligibility, permissions, required approvals, costs, and webhook tests are verified.

## Planned stack

- React + TypeScript + Vite
- Supabase Auth and PostgreSQL
- Responsive web app / installable PWA
- GitHub for version control

## Planned modules

- Authentication and role-based access
- Suppliers and collection lots
- Quality checks and compliance documents
- Packaging and inventory ledger
- Customer and retailer CRM
- Website checkout and order management
- Manual social-channel enquiries, then official API integrations
- Expenses, payments, audit logs, and reporting

## Safety and security principles

- A newly collected lot is not saleable by default; authorised quality/compliance review is required.
- Keep supplier lots traceable through packaged units and customer orders.
- Enforce permissions in the database, not only in the UI.
- Keep service-role keys and provider secrets server-side; never commit secrets.
- Do not store customer passwords, payment card details, or unnecessary sensitive message content in logs.
- Use official APIs only and follow platform permissions, privacy, and messaging policies.

## Development status

Repository scaffold and application code are not yet complete. Follow the project documentation and implementation plan as they are added.
