# Social Commerce Strategy

## Stage 1 — Manual capture
- WhatsApp Business profile/catalogue and click-to-chat link.
- Instagram professional profile bio/product links to website or WhatsApp.
- Facebook Page/product posts and Messenger contact path.
- Staff records DMs/enquiries in the Business OS and converts only customer-confirmed requests into orders.
- Website checkout creates the order directly.
- Each order stores channel attribution, confirmation state and assigned staff member.

## Stage 2 — Official APIs, one channel at a time
1. WhatsApp Business Platform.
2. Instagram Messaging API for eligible professional accounts.
3. Facebook Messenger API for an eligible Facebook Page.

Before implementation, verify the official platform documentation, account eligibility, permissions, app review, webhook subscriptions, allowed messaging windows, customer consent, privacy notice and fees. These can change and must be rechecked at integration time.

## Webhook safety
- Verify official webhook challenge/signature as applicable.
- Validate payload shape and account identity.
- Persist event identifier and processing state.
- Make handlers idempotent; repeated events must not create duplicate messages or orders.
- Use retry handling and safe logs without tokens or unnecessary personal content.
- Treat inbound messages as enquiries unless customer intent and required order data are confirmed.
- Never automatically send marketing messages without valid permission/consent.

## Budget principle
The ₹15,000 budget is for a business pilot. Do not assume API setup, custom integration labour or message charges fit this budget. Keep manual capture until the business validates demand and obtains actual quotes/eligibility.
