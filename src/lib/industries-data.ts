/**
 * Industry landing pages. Same structure as service pages (reuses ServicePage),
 * but framed around a market's specific pain. Their `related` slugs point to
 * SERVICE pages — so each industry page funnels into the commercial pages that
 * convert. Content is unique per industry to avoid thin/doorway pages.
 */

import type { Service } from "./services-data";

export const INDUSTRIES: Service[] = [
  {
    slug: "healthcare-software-development",
    eyebrow: "Healthcare",
    h1: "Healthcare software that clinicians trust and compliance approves.",
    metaTitle: "Healthcare Software Development",
    metaDescription:
      "HIPAA-conscious healthcare software from The Tech Wolves — telemedicine, EHR integrations, patient portals, and clinical automation built for reliability and privacy.",
    intro:
      "We build healthcare and telemedicine software that respects patient privacy, integrates with the systems clinicians already use, and reduces the admin load on care teams.",
    problem:
      "Healthcare runs on brittle, disconnected systems — booking here, records there, billing somewhere else — while staff burn out on paperwork. Add strict privacy requirements and most generic tools simply don't fit.",
    outcomes: [
      "Privacy-conscious builds (HIPAA-grade practices)",
      "Fewer admin hours per patient",
      "Systems that actually talk to each other",
      "Better patient experience and retention",
    ],
    offer: [
      { title: "Telemedicine", body: "Secure video, scheduling, and follow-up flows patients actually use." },
      { title: "EHR/EMR integration", body: "Connect records, labs, and billing so data stops living in silos." },
      { title: "Patient portals", body: "Booking, intake, results, and reminders in one place." },
      { title: "Clinical automation", body: "Automate intake, coding, reminders, and reporting." },
    ],
    useCases: [
      "A telemedicine platform with secure video and payments",
      "Automated patient intake that fills the EHR",
      "Appointment reminders that cut no-shows",
      "A clinician dashboard unifying records and tasks",
      "Insurance/billing workflows automated end-to-end",
    ],
    process: [
      { step: "Assess", detail: "We map workflows and privacy requirements first." },
      { step: "Design", detail: "Clinician- and patient-friendly, accessible by default." },
      { step: "Build", detail: "Secure, integrated, and reliable." },
      { step: "Support", detail: "Monitoring and iteration as needs evolve." },
    ],
    stack: ["Next.js", "Node", "Postgres", "FHIR/HL7", "Twilio", "Stripe", "Supabase"],
    pricingSignal:
      "Scope drives cost — from a focused patient portal to a full telemedicine platform. Message us and we'll scope it with a timeline.",
    faqs: [
      { question: "Do you handle HIPAA compliance?", answer: "We build to HIPAA-grade practices — encryption, access control, audit logging, and BAAs with infrastructure providers. We'll align to your compliance program." },
      { question: "Can you integrate with our EHR?", answer: "Yes — via FHIR/HL7 or vendor APIs, we connect to the records and billing systems you already run." },
      { question: "Can you reduce our admin load?", answer: "That's usually the fastest ROI — automating intake, reminders, coding, and reporting frees clinical time immediately." },
    ],
    related: ["custom-software-development", "business-process-automation", "ai-chatbot-development"],
    keywords: ["healthcare software development", "telemedicine app development", "ehr integration", "healthcare automation"],
    waMessage: "Hi Tech Wolves 👋 I'm building healthcare software —",
  },
  {
    slug: "fintech-software-development",
    eyebrow: "FinTech",
    h1: "FinTech software built for trust, speed, and scale.",
    metaTitle: "FinTech Software Development",
    metaDescription:
      "FinTech development from The Tech Wolves — banking apps, payments, dashboards, and compliance-aware automation, engineered for security and reliability at scale.",
    intro:
      "We build FinTech products where reliability and security aren't features — they're the foundation: payments, dashboards, and compliance-aware automation that hold up under real money and real scrutiny.",
    problem:
      "In finance, a slow, buggy, or insecure product doesn't just annoy users — it loses trust and money. Off-the-shelf rarely fits regulatory and integration needs, and cutting corners on security is a non-starter.",
    outcomes: [
      "Secure, auditable, reliable systems",
      "Faster transactions and reconciliation",
      "Compliance-aware automation",
      "Dashboards users and regulators trust",
    ],
    offer: [
      { title: "Payments & banking", body: "Integrations with payment rails, KYC, and ledgers." },
      { title: "Dashboards", body: "Real-time financial dashboards and reporting." },
      { title: "Automation", body: "Reconciliation, alerts, and compliance workflows." },
      { title: "Security", body: "Encryption, access control, and audit trails built in." },
    ],
    useCases: [
      "A payments dashboard with real-time reconciliation",
      "KYC/onboarding automation",
      "Automated transaction monitoring and alerts",
      "A lending or wallet app front-end + backend",
      "Regulatory reporting automated from source data",
    ],
    process: [
      { step: "Scope", detail: "We map integrations, security, and compliance needs." },
      { step: "Architect", detail: "Secure, auditable foundations first." },
      { step: "Build", detail: "Tested, reliable, and observable." },
      { step: "Operate", detail: "Monitoring and iteration for the long haul." },
    ],
    stack: ["Next.js", "Node", "Go", "Postgres", "Stripe/Plaid", "Kafka", "GCP"],
    pricingSignal:
      "FinTech scope varies widely — from a dashboard to a full product. Tell us the scope and we'll estimate with a timeline.",
    faqs: [
      { question: "How do you handle security?", answer: "Encryption at rest and in transit, least-privilege access, audit logging, and secure infra — security is designed in from the first architecture decision." },
      { question: "Can you integrate payment providers?", answer: "Yes — Stripe, Plaid, and regional rails, plus KYC/AML providers, wired with reconciliation and monitoring." },
      { question: "Do you support compliance?", answer: "We build the technical controls and audit trails your compliance program needs and work alongside your team." },
    ],
    related: ["custom-software-development", "business-process-automation", "web-development-company"],
    keywords: ["fintech software development", "payment app development", "banking software", "fintech automation"],
    waMessage: "Hi Tech Wolves 👋 I'm building a FinTech product —",
  },
  {
    slug: "ecommerce-automation",
    eyebrow: "E-commerce",
    h1: "E-commerce automation that grows margin, not just sales.",
    metaTitle: "E-commerce Automation & Development",
    metaDescription:
      "E-commerce automation from The Tech Wolves — order ops, inventory sync, support, and marketing flows automated so you scale revenue without scaling headcount.",
    intro:
      "We automate the operational back-end of e-commerce — orders, inventory, support, and marketing flows — so growth doesn't mean drowning in manual work and rising costs.",
    problem:
      "Scaling a store multiplies the manual work: order exceptions, stock sync across channels, support tickets, returns. Hire for all of it and margin evaporates; ignore it and experience suffers.",
    outcomes: [
      "Order and inventory ops on autopilot",
      "Support deflected and sped up",
      "Higher repeat purchase via smart flows",
      "Margin protected as you scale",
    ],
    offer: [
      { title: "Order & inventory", body: "Sync stock and automate order exceptions across channels." },
      { title: "Support automation", body: "AI support for WISMO, returns, and FAQs." },
      { title: "Marketing flows", body: "Abandoned cart, win-back, and post-purchase automation." },
      { title: "Storefronts", body: "Fast, headless storefronts that convert." },
    ],
    useCases: [
      "Multi-channel inventory sync (Shopify, Amazon, POS)",
      "AI support bot handling 'where is my order?'",
      "Automated returns and refund workflows",
      "Post-purchase and win-back email/WhatsApp flows",
      "A headless storefront rebuild for speed",
    ],
    process: [
      { step: "Audit", detail: "We find the costliest manual ops first." },
      { step: "Automate", detail: "Orders, inventory, and support flows." },
      { step: "Connect", detail: "Your store, ERP, and channels in sync." },
      { step: "Optimise", detail: "Measure margin and repeat rate, then extend." },
    ],
    stack: ["Shopify", "Next.js", "n8n", "Klaviyo", "Postgres", "Webhooks"],
    pricingSignal:
      "We start with the highest-cost manual workflow and expand. Share your stack and volume and we'll estimate the savings.",
    faqs: [
      { question: "Which platforms do you work with?", answer: "Shopify, WooCommerce, custom storefronts, plus marketplaces and POS — we automate around your existing stack." },
      { question: "Can you cut support load?", answer: "Yes — an AI support agent grounded in your policies handles order status, returns, and FAQs, escalating the rest." },
      { question: "Will automation hurt experience?", answer: "The opposite — faster responses and fewer errors improve experience while lowering cost." },
    ],
    related: ["ai-chatbot-development", "business-process-automation", "web-development-company"],
    keywords: ["ecommerce automation", "shopify automation", "ecommerce development", "order automation"],
    waMessage: "Hi Tech Wolves 👋 I want to automate my e-commerce ops —",
  },
  {
    slug: "real-estate-software-development",
    eyebrow: "Real Estate",
    h1: "Real estate software that turns listings into closed deals.",
    metaTitle: "Real Estate Software Development",
    metaDescription:
      "Real estate software from The Tech Wolves — listing platforms, virtual tours, lead automation, and CRM built to capture and convert more buyers and tenants.",
    intro:
      "We build real estate platforms and automations that capture every lead, present properties beautifully, and follow up automatically — so agents close instead of chasing admin.",
    problem:
      "Real estate lives and dies on speed-to-lead and follow-up, yet most agencies leak enquiries across portals, email, and WhatsApp, and let warm leads go cold. Listings management is manual and fragmented.",
    outcomes: [
      "Every enquiry captured and routed instantly",
      "Automated, persistent follow-up",
      "Beautiful, fast listing experiences",
      "One system instead of five",
    ],
    offer: [
      { title: "Listing platforms", body: "Fast, searchable, beautiful property sites." },
      { title: "Lead automation", body: "Capture, route, and follow up across every channel." },
      { title: "Virtual tours", body: "Rich media and 3D/virtual tour integration." },
      { title: "Agent CRM", body: "A pipeline built for property sales and rentals." },
    ],
    useCases: [
      "A listing portal with map/filter search",
      "Instant lead routing from portals to agents",
      "Automated viewing scheduling and reminders",
      "WhatsApp follow-up sequences for warm leads",
      "A CRM tuned for real-estate pipelines",
    ],
    process: [
      { step: "Map", detail: "We map your lead sources and sales flow." },
      { step: "Build", detail: "Listings, capture, and CRM as one system." },
      { step: "Automate", detail: "Routing, scheduling, and follow-up." },
      { step: "Refine", detail: "Optimise speed-to-lead and conversion." },
    ],
    stack: ["Next.js", "Mapbox", "n8n", "HubSpot/Pipedrive", "Postgres", "WhatsApp API"],
    pricingSignal:
      "From a listing site to a full lead-to-close platform — scope drives cost. Tell us your setup and we'll scope it.",
    faqs: [
      { question: "Can you capture leads from portals?", answer: "Yes — we consolidate enquiries from portals, your site, and WhatsApp into one pipeline and route them instantly." },
      { question: "Do you build the CRM too?", answer: "We can tune an existing CRM for real estate or build a custom pipeline — whichever fits your team." },
      { question: "What's the fastest win?", answer: "Speed-to-lead: instant routing plus automated follow-up recovers deals that currently slip away." },
    ],
    related: ["crm-automation", "web-development-company", "business-process-automation"],
    keywords: ["real estate software development", "property listing platform", "real estate crm", "real estate lead automation"],
    waMessage: "Hi Tech Wolves 👋 I need real estate software / lead automation —",
  },
  {
    slug: "logistics-automation",
    eyebrow: "Logistics",
    h1: "Logistics automation that gives you real-time control.",
    metaTitle: "Logistics Software & Automation",
    metaDescription:
      "Logistics automation from The Tech Wolves — real-time tracking, inventory, dispatch, and reporting automated so operations run tighter with fewer manual touches.",
    intro:
      "We build logistics software and automation that replace spreadsheets and phone calls with real-time tracking, automated dispatch, and dashboards you can actually run operations from.",
    problem:
      "Logistics ops often run on spreadsheets, WhatsApp, and phone calls — no real-time visibility, constant manual updates, and errors that cascade into late deliveries and unhappy customers.",
    outcomes: [
      "Real-time visibility across the operation",
      "Fewer manual updates and errors",
      "Faster dispatch and reconciliation",
      "Data to actually optimise routes and cost",
    ],
    offer: [
      { title: "Tracking", body: "Real-time shipment and fleet tracking dashboards." },
      { title: "Inventory & WMS", body: "Stock, warehouse, and order state in one place." },
      { title: "Dispatch automation", body: "Automated assignment, alerts, and status updates." },
      { title: "Reporting", body: "Ops and cost dashboards that drive decisions." },
    ],
    useCases: [
      "A real-time tracking dashboard for shipments/fleet",
      "Automated dispatch and driver notifications",
      "Inventory sync across warehouses and channels",
      "Exception alerts for delays and issues",
      "Automated delivery reporting and reconciliation",
    ],
    process: [
      { step: "Map", detail: "We map the flow from order to delivery." },
      { step: "Build", detail: "Tracking, inventory, and dispatch systems." },
      { step: "Automate", detail: "Assignments, alerts, and updates." },
      { step: "Optimise", detail: "Use the data to cut cost and delay." },
    ],
    stack: ["Next.js", "Node", "Postgres", "Maps/GPS APIs", "n8n", "MQTT/IoT"],
    pricingSignal:
      "From a tracking dashboard to a full ops platform — scope drives cost. Share your operation and we'll scope it.",
    faqs: [
      { question: "Can you integrate GPS/telematics?", answer: "Yes — we integrate GPS, telematics, and IoT feeds into real-time tracking and alerting dashboards." },
      { question: "Do you replace our WMS?", answer: "Only if it makes sense — often we connect and automate around existing systems to add visibility and cut manual work." },
      { question: "What's the fastest win?", answer: "Real-time visibility plus automated status updates — they cut the constant manual check-ins immediately." },
    ],
    related: ["custom-software-development", "business-process-automation", "n8n-automation-agency"],
    keywords: ["logistics automation", "logistics software development", "fleet tracking software", "supply chain automation"],
    waMessage: "Hi Tech Wolves 👋 I want to automate logistics operations —",
  },
  {
    slug: "fitness-app-development",
    eyebrow: "Fitness & Wellness",
    h1: "Fitness apps that keep members coming back.",
    metaTitle: "Fitness & Gym App Development",
    metaDescription:
      "Fitness and gym app development from The Tech Wolves — booking, memberships, workout tracking, and engagement automation that boosts retention and recurring revenue.",
    intro:
      "We build fitness and wellness apps that make booking effortless, keep members engaged, and automate the admin — so studios and coaches grow recurring revenue instead of chasing it.",
    problem:
      "Fitness businesses lose members to friction and silence: clunky booking, forgotten sessions, no engagement between visits. Manual admin and no-shows quietly eat revenue every week.",
    outcomes: [
      "Frictionless booking and memberships",
      "Higher retention through engagement",
      "Fewer no-shows via automated reminders",
      "Recurring revenue that compounds",
    ],
    offer: [
      { title: "Booking & memberships", body: "Class booking, plans, and payments in-app." },
      { title: "Workout tracking", body: "Programs, progress, and coaching in one place." },
      { title: "Engagement", body: "Reminders, streaks, and win-back automation." },
      { title: "Coach tools", body: "Dashboards for schedules, clients, and revenue." },
    ],
    useCases: [
      "A gym app with booking, plans, and payments",
      "A coaching app with programs and progress",
      "Automated reminders that cut no-shows",
      "Win-back flows for lapsed members",
      "A studio dashboard for schedules and revenue",
    ],
    process: [
      { step: "Define", detail: "We scope the MVP that proves retention lift." },
      { step: "Design", detail: "Motivating, native-feeling, easy to use." },
      { step: "Build", detail: "Cross-platform with booking and payments." },
      { step: "Grow", detail: "Add engagement automation and iterate." },
    ],
    stack: ["Flutter", "React Native", "Node", "Stripe", "Supabase", "Push/WhatsApp"],
    pricingSignal:
      "An MVP proves the model before heavy investment. Tell us your studio/coaching setup and we'll scope it.",
    faqs: [
      { question: "Can members book and pay in-app?", answer: "Yes — class/session booking, membership plans, and payments are core to the build." },
      { question: "How do you improve retention?", answer: "Automated reminders, streaks, progress tracking, and win-back flows keep members engaged between visits." },
      { question: "Should we start with an MVP?", answer: "Yes — ship the core booking + engagement loop, learn from real members, then expand." },
    ],
    related: ["mobile-app-development", "crm-automation", "ui-ux-design-agency"],
    keywords: ["fitness app development", "gym app development", "wellness app development", "fitness booking app"],
    waMessage: "Hi Tech Wolves 👋 I want to build a fitness/gym app —",
  },
];

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);

export function getIndustry(slug: string): Service | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
