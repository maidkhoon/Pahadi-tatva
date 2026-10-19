# Planned Database Schema

Schema is a plan and must be reviewed before migrations are applied.

## Identity and access
- profiles: user id, display name, phone, status.
- user_roles: user id and approved role; only owners/admins may grant roles.
- audit_logs: actor, action, entity type/id, safe metadata, timestamp.

## Supply and quality
- suppliers: business/contact details and active status.
- supplier_documents: private document metadata and storage path.
- collections: supplier, received date, weight, purchase rate, source lot code, process notes, status.
- quality_tests: collection lot, test/provider, result values, result date, report document, review status.
- compliance_documents: document type, scope, issuing authority, validity dates, storage path and review state.

## Packaging and inventory
- products: name, pack size, SKU, published state, pricing.
- packaging_batches: product/pack size, source collection lot(s), packed quantity, pack date, label version and release status.
- inventory_movements: product/batch, movement type, positive/negative quantity, linked order/adjustment, actor and timestamp.
- packaging_materials: packaging SKU, on-hand quantity and reorder threshold (later MVP if needed).

## Sales and CRM
- customers: contact details, consent flags/timestamps and communication preferences.
- retailers: customer link, approved pricing and payment terms.
- orders: order number, customer/retailer, channel, status, confirmation, amounts, address snapshot and timestamps.
- order_items: order, product, quantity, unit price and discounts.
- order_item_batches: order item, packaging batch and allocated quantity, enabling traceability.
- payments: order, amount, mode, status, reference and timestamp. Never store card numbers/CVV.
- expenses: category, amount, date, payee and evidence document.
- enquiries: source channel, customer/contact reference, summary, status, follow-up owner and conversion order.

## Social channels (phased)
- sales_channels: channel type, enabled status, human-readable configuration (no raw secrets).
- social_accounts: provider account/page identifiers, status and permission metadata; keep tokens in server-side secrets.
- conversations: channel/account, provider conversation reference, customer, assigned staff and status.
- messages: safe message metadata, direction, provider message id, timestamp and delivery state; minimise stored message body.
- channel_events: provider event id, payload hash/reference, received timestamp, processing state, retry metadata.
- order_attributions: order, channel, campaign/referrer/source metadata.
- notification_jobs: approved template/type, intended recipient, state, retry and provider reference.

## Important constraints
- Use foreign keys, check constraints, non-negative quantities where appropriate, and unique provider event IDs scoped by account.
- Orders and stock deduction must be transactional/idempotent.
- Any lot mixing requires recording every source lot and input quantity.
- RLS policies must be written and tested for every exposed table before real data is added.
