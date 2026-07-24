/**
 * Service pages — the commercial-intent landing pages that convert traffic the
 * blog discovers. Each page owns a specific buyer query ("ai automation agency",
 * "crm automation", "n8n automation agency"…) so it can rank and sell, instead
 * of the homepage trying to rank for everything.
 *
 * Content is deliberately unique per service (real problem, outcomes, use cases,
 * process, FAQs) to avoid thin/doorway pages that Google penalises.
 */

export type ServiceFAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problem: string;
  outcomes: string[];
  offer: { title: string; body: string }[];
  useCases: string[];
  process: { step: string; detail: string }[];
  stack?: string[];
  pricingSignal: string;
  faqs: ServiceFAQ[];
  related: string[];
  keywords: string[];
  /** contextual WhatsApp prefill for this service */
  waMessage: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ai-automation-agency",
    eyebrow: "AI Automation Agency",
    h1: "An AI automation agency that ships systems, not slide decks.",
    metaTitle: "AI Automation Agency for SMEs & Startups",
    metaDescription:
      "The Tech Wolves is an AI automation agency that builds custom AI agents, workflow automation, and LLM integrations for SMEs — measurable ROI in weeks, not quarters.",
    intro:
      "We design and build production AI automation for businesses that are drowning in manual, repetitive work — support, data entry, reporting, follow-ups — and want it handled by reliable systems instead of more headcount.",
    problem:
      "Your team spends hours a day on work software should do: copying data between tools, answering the same questions, chasing updates, compiling reports. It doesn't scale, it burns out good people, and it quietly caps your growth.",
    outcomes: [
      "Up to 80% of repetitive workflows automated end-to-end",
      "First working automation live in days, full rollout in 8–12 weeks",
      "Support and ops handled 24/7 without adding headcount",
      "Clean audit trails and dashboards so you can trust the system",
    ],
    offer: [
      { title: "AI agents", body: "Task-specific agents (Claude, GPT, Gemini) that triage, draft, route, and act across your tools." },
      { title: "Workflow automation", body: "n8n / custom orchestration connecting your CRM, inbox, docs, and databases into one flow." },
      { title: "Retrieval & knowledge", body: "RAG pipelines so the AI answers from your real data — policies, docs, product info — not guesses." },
      { title: "Human-in-the-loop", body: "Approval steps and guardrails where they matter, so automation stays safe and on-brand." },
    ],
    useCases: [
      "Auto-triage and draft replies for 70%+ of inbound support tickets",
      "Turn emails and PDFs into structured records in your CRM automatically",
      "Generate weekly ops and revenue reports with zero manual work",
      "Qualify and route inbound leads the moment they arrive",
      "Reconcile data between tools that were never meant to talk to each other",
    ],
    process: [
      { step: "Map", detail: "We audit your workflows and find the highest-ROI automation opportunities first." },
      { step: "Build", detail: "We ship a working first automation fast, then expand once it's proven in your business." },
      { step: "Integrate", detail: "Connected to your real tools, with guardrails, logging, and dashboards." },
      { step: "Support", detail: "We monitor, tune, and extend the system as your processes evolve." },
    ],
    stack: ["Claude", "GPT", "n8n", "Python", "Next.js", "Supabase", "Vercel"],
    pricingSignal:
      "Engagements start with a focused first automation and scale into full ops coverage. Most SMEs start in the mid four figures; send us your workflow and we'll ballpark it within hours.",
    faqs: [
      { question: "How is this different from buying an off-the-shelf AI tool?", answer: "Off-the-shelf tools solve generic problems. We automate your specific workflows, connected to your specific tools, with your rules — so it actually fits how you work." },
      { question: "Will the AI make mistakes?", answer: "We design human-in-the-loop approvals and guardrails for anything sensitive, plus full logging, so you stay in control while automating the volume." },
      { question: "How fast can we start?", answer: "We usually ship a working first automation within days of a discovery call, so you see value before committing to the full build." },
    ],
    related: ["business-process-automation", "n8n-automation-agency", "ai-chatbot-development"],
    keywords: ["ai automation agency", "ai automation for small business", "ai agents for business", "business ai automation"],
    waMessage: "Hi Tech Wolves 👋 I'd like to explore AI automation for my business —",
  },
  {
    slug: "business-process-automation",
    eyebrow: "Business Process Automation",
    h1: "Business process automation that pays for itself.",
    metaTitle: "Business Process Automation Services",
    metaDescription:
      "Automate the manual workflows slowing your team down — approvals, data entry, reporting, handoffs. The Tech Wolves builds business process automation with clear ROI.",
    intro:
      "We map, streamline, and automate the operational workflows that eat your team's time — so work moves itself instead of waiting on someone to push it forward.",
    problem:
      "Every growing business hits the same wall: processes held together by spreadsheets, email, and 'ask Priya'. It's slow, error-prone, and impossible to scale without hiring for tasks that shouldn't need a human.",
    outcomes: [
      "Hours per week given back to your team",
      "Fewer errors and dropped handoffs",
      "Processes that scale without proportional hiring",
      "Visibility into where work actually stands",
    ],
    offer: [
      { title: "Process mapping", body: "We document how work really flows today and find the bottlenecks worth fixing first." },
      { title: "Workflow automation", body: "Approvals, notifications, data sync, and handoffs automated across your existing tools." },
      { title: "Integrations", body: "CRM, ERP, accounting, and internal tools connected so data flows without copy-paste." },
      { title: "Internal tooling", body: "Lightweight dashboards and apps that replace fragile spreadsheets." },
    ],
    useCases: [
      "Automated multi-step approval flows (POs, leave, expenses)",
      "Two-way sync between your CRM and accounting/ERP",
      "Onboarding checklists that trigger the right tasks automatically",
      "Inventory and order status dashboards updated in real time",
      "Scheduled reports delivered to Slack/email with no manual pull",
    ],
    process: [
      { step: "Audit", detail: "We shadow the process, quantify the time cost, and prioritise by ROI." },
      { step: "Design", detail: "We redesign the flow to remove steps before we automate what's left." },
      { step: "Automate", detail: "Built on your stack, with logging and error handling." },
      { step: "Iterate", detail: "We measure the time saved and expand to the next process." },
    ],
    stack: ["n8n", "Zapier/Make", "Python", "Node", "Postgres", "Google Workspace", "Slack"],
    pricingSignal:
      "Most engagements start by automating one high-cost process and expand from there. Share the workflow and we'll estimate the hours saved and the cost within hours.",
    faqs: [
      { question: "What's the ROI on process automation?", answer: "We prioritise by hours saved × hourly cost, so the first automation typically pays for itself within weeks. We quantify it before we build." },
      { question: "Do you replace our existing tools?", answer: "Rarely. We connect and orchestrate the tools you already use — the goal is to remove the manual glue between them." },
      { question: "What if our process is messy?", answer: "That's normal, and it's exactly where the value is. We fix the process first, then automate the clean version." },
    ],
    related: ["ai-automation-agency", "crm-automation", "n8n-automation-agency"],
    keywords: ["business process automation", "workflow automation", "business process automation examples", "process automation agency"],
    waMessage: "Hi Tech Wolves 👋 We want to automate a business process —",
  },
  {
    slug: "custom-software-development",
    eyebrow: "Custom Software Development",
    h1: "Custom software built for how your business actually works.",
    metaTitle: "Custom Software Development Company",
    metaDescription:
      "Custom web and internal software built by The Tech Wolves — when off-the-shelf SaaS can't fit your process. Modern stack, real outcomes, ongoing support.",
    intro:
      "When SaaS almost fits but forces you to bend your business around it, we build software that fits you — internal tools, portals, and platforms designed around your real workflows.",
    problem:
      "You're paying for five tools that half-solve the problem, exporting CSVs between them, and still doing the important part by hand. Off-the-shelf can't model your edge cases — but custom software can.",
    outcomes: [
      "One system that models your actual process",
      "No more per-seat SaaS sprawl for core workflows",
      "Data you own, in one place, reportable",
      "A codebase you can extend as you grow",
    ],
    offer: [
      { title: "Internal tools & portals", body: "Admin panels, client portals, and ops tools tailored to your team." },
      { title: "Web platforms", body: "Multi-tenant apps, marketplaces, dashboards — built to scale." },
      { title: "Integrations & APIs", body: "Connect the systems you rely on with robust, documented APIs." },
      { title: "Modernisation", body: "Rebuild legacy tools and spreadsheets into reliable software." },
    ],
    useCases: [
      "A client portal that replaces email + spreadsheet chaos",
      "An internal ops tool your team actually enjoys using",
      "A booking/scheduling platform with your exact rules",
      "A reporting dashboard pulling from all your data sources",
      "A custom CRM when generic CRMs don't fit your sales motion",
    ],
    process: [
      { step: "Scope", detail: "We turn your requirements into a concrete plan, timeline, and cost." },
      { step: "Prototype", detail: "A working first version fast, so you can react to something real." },
      { step: "Build", detail: "Shipped in increments on a modern, maintainable stack." },
      { step: "Support", detail: "Ongoing maintenance, monitoring, and iteration." },
    ],
    stack: ["Next.js", "React", "Node", "Python", "Go", "Postgres", "Supabase", "Vercel", "GCP"],
    pricingSignal:
      "Scope drives cost — from a focused internal tool to a full platform build. Book a call and we'll return a scoped estimate with timeline and ROI within 48 hours.",
    faqs: [
      { question: "Custom software vs SaaS — how do we decide?", answer: "If a SaaS fits 90% of your need, use it. If your core workflow is your edge and no tool fits it, custom software pays back by removing manual work and tool sprawl. We'll advise honestly." },
      { question: "Do we own the code?", answer: "Yes — you own the codebase and IP. No lock-in." },
      { question: "How do you keep costs predictable?", answer: "We scope tightly, ship a prototype early, and build in increments so you see progress and can adjust before spend grows." },
    ],
    related: ["web-development-company", "mobile-app-development", "business-process-automation"],
    keywords: ["custom software development", "custom software vs saas", "custom software company", "bespoke software development"],
    waMessage: "Hi Tech Wolves 👋 I need custom software for my business —",
  },
  {
    slug: "web-development-company",
    eyebrow: "Web Development",
    h1: "A web development company obsessed with conversion, not just code.",
    metaTitle: "Web Development Company for Growth-Focused Brands",
    metaDescription:
      "The Tech Wolves builds fast, SEO-ready, conversion-tuned websites and web apps on Next.js — sites that rank, load instantly, and turn visitors into leads.",
    intro:
      "We build websites and web apps that do a job: rank, load fast, and convert. Not brochures — growth assets, engineered for performance and search from day one.",
    problem:
      "Most agency sites look fine and perform terribly — slow, invisible to Google, and leaking every visitor who doesn't convert. A pretty site that no one finds and no one acts on is a cost, not an asset.",
    outcomes: [
      "Core Web Vitals in the green, instant loads",
      "SEO and schema built in, not bolted on",
      "Conversion paths designed to produce inquiries",
      "A codebase your team can actually maintain",
    ],
    offer: [
      { title: "Marketing sites", body: "Conversion-tuned, SEO-ready sites on Next.js — like this one." },
      { title: "Web apps", body: "Dashboards, portals, and SaaS front-ends that stay fast at scale." },
      { title: "Headless & CMS", body: "Editable content without sacrificing performance." },
      { title: "Performance & SEO", body: "Technical SEO, schema, speed — the parts that decide ranking." },
    ],
    useCases: [
      "A marketing site that ranks and books calls",
      "A fast headless storefront front-end",
      "A customer dashboard with real-time data",
      "A landing-page system for campaigns",
      "A rebuild that fixes speed and SEO debt",
    ],
    process: [
      { step: "Strategy", detail: "We define who it's for and the action it must drive." },
      { step: "Design", detail: "On-brand, accessible, conversion-first." },
      { step: "Build", detail: "Next.js, fast, SEO-ready, schema included." },
      { step: "Optimise", detail: "We measure and improve conversion post-launch." },
    ],
    stack: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel", "Framer Motion"],
    pricingSignal:
      "From a high-converting marketing site to a full web app — cost tracks scope. Message us with your goal and we'll estimate quickly.",
    faqs: [
      { question: "Will the site actually rank?", answer: "We build technical SEO, schema, performance, and content structure in from the start — the foundations ranking depends on. Content and time do the rest." },
      { question: "How fast will it load?", answer: "We target green Core Web Vitals — lazy-loaded heavy assets, optimised images, minimal JS on first paint." },
      { question: "Can our team edit it?", answer: "Yes — we can wire a headless CMS so non-developers manage content safely." },
    ],
    related: ["ui-ux-design-agency", "custom-software-development", "mobile-app-development"],
    keywords: ["web development company", "web development agency", "next.js development company", "conversion web design"],
    waMessage: "Hi Tech Wolves 👋 I'm looking to build/rebuild a website —",
  },
  {
    slug: "mobile-app-development",
    eyebrow: "Mobile App Development",
    h1: "Mobile apps users keep on their home screen.",
    metaTitle: "Mobile App Development Company",
    metaDescription:
      "Cross-platform mobile apps (Flutter, React Native) built by The Tech Wolves — one codebase, native feel, shipped fast, backed by solid infrastructure.",
    intro:
      "We build cross-platform mobile apps that feel native, ship on one codebase, and are backed by infrastructure that won't fall over when you grow.",
    problem:
      "Native-for-both-platforms doubles cost and timeline; cheap hybrid apps feel janky and get uninstalled. You need native feel without paying to build everything twice.",
    outcomes: [
      "One codebase, iOS + Android",
      "Native-quality performance and feel",
      "Faster time-to-store, lower build cost",
      "Backend and analytics built in",
    ],
    offer: [
      { title: "Cross-platform apps", body: "Flutter / React Native — native feel, single codebase." },
      { title: "Backend & APIs", body: "Auth, payments, real-time, notifications — done right." },
      { title: "App + web parity", body: "Shared logic across app and web where it makes sense." },
      { title: "Launch & iterate", body: "Store submission, analytics, and post-launch improvement." },
    ],
    useCases: [
      "A booking or services app with payments",
      "A companion app for an existing platform",
      "An internal field-team app with offline support",
      "A community or content app with notifications",
      "An MVP to validate before heavy investment",
    ],
    process: [
      { step: "Define", detail: "We scope the MVP that proves the idea fastest." },
      { step: "Design", detail: "Native patterns, accessible, on-brand." },
      { step: "Build", detail: "Cross-platform, with a solid backend." },
      { step: "Ship", detail: "Store launch, analytics, and iteration." },
    ],
    stack: ["Flutter", "React Native", "Expo", "Node", "Supabase", "Firebase"],
    pricingSignal:
      "An MVP costs a fraction of a full build — the smart way to start. Tell us the idea and we'll scope an MVP and estimate.",
    faqs: [
      { question: "Flutter or React Native?", answer: "Both give native feel from one codebase. We pick based on your team, integrations, and roadmap — and explain the trade-off." },
      { question: "Should we start with an MVP?", answer: "Almost always. Ship the core that proves value, learn from real users, then invest in what works." },
      { question: "Do you handle the backend too?", answer: "Yes — auth, payments, real-time, notifications, and analytics are part of the build." },
    ],
    related: ["custom-software-development", "web-development-company", "ui-ux-design-agency"],
    keywords: ["mobile app development", "flutter app development", "react native development", "app development company"],
    waMessage: "Hi Tech Wolves 👋 I have a mobile app idea —",
  },
  {
    slug: "ui-ux-design-agency",
    eyebrow: "UI/UX Design",
    h1: "UI/UX design that makes the right action obvious.",
    metaTitle: "UI/UX Design Agency",
    metaDescription:
      "Conversion-focused UI/UX design and design systems from The Tech Wolves — interfaces that are beautiful, accessible, and engineered to convert.",
    intro:
      "We design interfaces that feel effortless and convert — grounded in real UX principles and a design system, not just a pretty mockup that breaks in build.",
    problem:
      "Design that only looks good in a portfolio fails in production: inconsistent, inaccessible, and it never tested whether users can actually do the thing. Good-looking isn't the same as working.",
    outcomes: [
      "Higher conversion and task completion",
      "A design system that keeps you consistent",
      "Accessible by default (WCAG)",
      "Designs that survive engineering intact",
    ],
    offer: [
      { title: "Product & app UX", body: "Flows, wireframes, and prototypes that reduce friction." },
      { title: "Design systems", body: "Tokens and components for consistency and speed." },
      { title: "Landing pages", body: "Conversion-first pages backed by UX principles." },
      { title: "Redesigns", body: "Fix usability and conversion on what you already have." },
    ],
    useCases: [
      "A SaaS dashboard redesign that lifts activation",
      "A design system to unify a growing product",
      "A landing page that finally converts",
      "An onboarding flow that reduces drop-off",
      "An accessibility pass to meet compliance",
    ],
    process: [
      { step: "Research", detail: "We learn the user and the job to be done." },
      { step: "Design", detail: "Wireframe → prototype → polished UI, tested for clarity." },
      { step: "System", detail: "Tokens and components so it stays consistent." },
      { step: "Handoff", detail: "Build-ready specs — and we can build it too." },
    ],
    stack: ["Figma", "Design tokens", "Tailwind", "shadcn/ui", "Framer Motion"],
    pricingSignal:
      "From a single high-stakes page to a full product design system — scope drives cost. Share what you're working on and we'll scope it.",
    faqs: [
      { question: "Do you only design, or build too?", answer: "Both. We can hand off build-ready specs, or design and build it end-to-end — often the faster, cleaner path." },
      { question: "What's a design system worth?", answer: "It pays back every time you ship — consistent UI, faster builds, fewer decisions. Essential once you have more than a couple of screens." },
      { question: "Is accessibility included?", answer: "Yes — we design to WCAG contrast, focus, and keyboard standards by default." },
    ],
    related: ["web-development-company", "mobile-app-development", "custom-software-development"],
    keywords: ["ui ux design agency", "product design agency", "design system agency", "conversion ux design"],
    waMessage: "Hi Tech Wolves 👋 I need UI/UX design help —",
  },
  {
    slug: "n8n-automation-agency",
    eyebrow: "n8n Automation",
    h1: "An n8n automation agency for teams that want to own their workflows.",
    metaTitle: "n8n Automation Agency",
    metaDescription:
      "The Tech Wolves builds and hosts production n8n automations — no per-task SaaS fees, full control, connected to your tools and AI. Own your automation stack.",
    intro:
      "We design, build, and host production n8n workflows — so you get powerful, AI-ready automation you actually own, without bleeding money on per-task automation SaaS.",
    problem:
      "Zapier and Make get expensive fast and box you in. n8n is the answer — self-hostable, flexible, AI-native — but only if it's built and hosted properly. That's what we do.",
    outcomes: [
      "No per-task fees — own your automation stack",
      "Complex, branching, AI-powered workflows",
      "Self-hosted or managed, your choice",
      "Connected to your tools and LLMs",
    ],
    offer: [
      { title: "Workflow builds", body: "Robust n8n workflows with error handling and logging." },
      { title: "AI-native flows", body: "LLM steps, agents, and RAG inside your automations." },
      { title: "Hosting & ops", body: "We host, monitor, and maintain your n8n instance." },
      { title: "Migration", body: "Move off Zapier/Make and cut recurring cost." },
    ],
    useCases: [
      "Lead capture → enrich → route → notify, fully automated",
      "AI email triage and drafting inside n8n",
      "Sync data across CRM, sheets, and databases",
      "Scheduled scraping, reporting, and alerts",
      "Migrating expensive Zapier zaps to owned n8n",
    ],
    process: [
      { step: "Map", detail: "We design the workflow and the failure cases." },
      { step: "Build", detail: "Production n8n with logging and retries." },
      { step: "Host", detail: "Deployed and monitored, self-hosted or managed." },
      { step: "Support", detail: "We maintain and extend as you grow." },
    ],
    stack: ["n8n", "Docker", "Postgres", "Claude/GPT", "Webhooks", "REST APIs"],
    pricingSignal:
      "Owning n8n usually costs less than the SaaS it replaces within months. Tell us your workflows and we'll estimate the build and the savings.",
    faqs: [
      { question: "Why n8n over Zapier or Make?", answer: "n8n is self-hostable and has no per-task pricing, so it's far cheaper at volume and far more flexible — including native AI/LLM steps. You own it." },
      { question: "Can you host it for us?", answer: "Yes — we offer fully managed hosting, monitoring, and maintenance, or we set it up on your infrastructure." },
      { question: "Can it use AI?", answer: "Absolutely — n8n has first-class LLM and agent steps; we build AI directly into the workflows." },
    ],
    related: ["ai-automation-agency", "business-process-automation", "crm-automation"],
    keywords: ["n8n automation agency", "n8n consultant", "n8n development", "zapier alternative agency"],
    waMessage: "Hi Tech Wolves 👋 I want to build automations with n8n —",
  },
  {
    slug: "ai-chatbot-development",
    eyebrow: "AI Chatbot Development",
    h1: "AI chatbots that answer from your business, not the internet.",
    metaTitle: "AI Chatbot Development Services",
    metaDescription:
      "Custom AI chatbots and support agents from The Tech Wolves — trained on your docs, connected to your systems, handling the volume so your team handles the hard stuff.",
    intro:
      "We build AI chatbots and support agents grounded in your actual content — policies, docs, product data — so they answer accurately, escalate cleanly, and cut your support load.",
    problem:
      "Generic chatbots hallucinate, frustrate customers, and get switched off. A bot that doesn't know your business does more harm than good. The fix is grounding it in your real data with guardrails.",
    outcomes: [
      "Deflect 60–80% of repetitive questions",
      "Accurate answers from your real content",
      "Clean handoff to humans when it matters",
      "24/7 coverage without extra headcount",
    ],
    offer: [
      { title: "Support agents", body: "RAG chatbots trained on your docs and tickets." },
      { title: "Site & app assistants", body: "In-product help that guides and converts." },
      { title: "Lead-qual bots", body: "Qualify and book inbound while you sleep." },
      { title: "Integrations", body: "Connected to your helpdesk, CRM, and knowledge base." },
    ],
    useCases: [
      "A support bot that resolves FAQs and escalates the rest",
      "A website assistant that answers and books calls",
      "An internal bot over your team's knowledge base",
      "A WhatsApp/webchat bot for inbound sales",
      "A product assistant that reduces onboarding friction",
    ],
    process: [
      { step: "Ground", detail: "We ingest your docs and structure the knowledge." },
      { step: "Build", detail: "RAG + guardrails so answers stay accurate and safe." },
      { step: "Connect", detail: "Wired to your helpdesk, CRM, and channels." },
      { step: "Improve", detail: "We monitor conversations and tune continuously." },
    ],
    stack: ["Claude", "GPT", "RAG", "Vector DB", "Next.js", "Webhooks"],
    pricingSignal:
      "From a focused FAQ bot to a full support agent — cost tracks scope and integrations. Share your use case and we'll estimate.",
    faqs: [
      { question: "Will it hallucinate?", answer: "We ground answers in your content with retrieval and guardrails, and it says 'let me connect you to a human' rather than guessing when unsure." },
      { question: "Can it hand off to a person?", answer: "Yes — clean escalation to your helpdesk or a live agent, with the full conversation context." },
      { question: "Where can it live?", answer: "Website, app, WhatsApp, or inside your helpdesk — wherever your customers already are." },
    ],
    related: ["ai-automation-agency", "crm-automation", "business-process-automation"],
    keywords: ["ai chatbot development", "ai chatbot for business", "custom chatbot development", "rag chatbot agency"],
    waMessage: "Hi Tech Wolves 👋 I want an AI chatbot for my business —",
  },
  {
    slug: "crm-automation",
    eyebrow: "CRM Automation",
    h1: "CRM automation so no lead ever goes cold.",
    metaTitle: "CRM Automation Services",
    metaDescription:
      "The Tech Wolves automates your CRM — lead capture, enrichment, routing, follow-ups, and reporting — so your pipeline runs itself and your team sells.",
    intro:
      "We turn your CRM from a place data goes to die into an engine — capturing, enriching, routing, and following up automatically so your team spends time selling, not updating fields.",
    problem:
      "Leads sit unassigned, follow-ups slip, and half your CRM fields are empty because updating them is a chore. Every one of those gaps is lost revenue you already paid to acquire.",
    outcomes: [
      "Every lead captured, enriched, and routed instantly",
      "Follow-ups that never slip",
      "Clean data without manual entry",
      "Pipeline reporting you can trust",
    ],
    offer: [
      { title: "Lead automation", body: "Capture → enrich → score → route the moment a lead arrives." },
      { title: "Follow-up sequences", body: "Automated, personalised nudges so nothing goes cold." },
      { title: "Data hygiene", body: "Auto-fill and de-dupe so your CRM stays clean." },
      { title: "Reporting", body: "Live pipeline and revenue dashboards." },
    ],
    useCases: [
      "Route inbound leads to the right rep in seconds",
      "Auto-enrich contacts from email/website data",
      "Trigger follow-up sequences based on behaviour",
      "Sync CRM with your inbox, calendar, and billing",
      "Weekly pipeline reports with zero manual work",
    ],
    process: [
      { step: "Audit", detail: "We find where leads and data leak today." },
      { step: "Automate", detail: "Capture, routing, follow-ups, and hygiene built in." },
      { step: "Integrate", detail: "Connected to your inbox, site, and billing." },
      { step: "Report", detail: "Dashboards so you can see and trust the pipeline." },
    ],
    stack: ["HubSpot", "Pipedrive", "n8n", "Webhooks", "Clearbit-style enrichment", "Postgres"],
    pricingSignal:
      "We work with your existing CRM (HubSpot, Pipedrive, Zoho, or custom). Tell us your setup and we'll scope the automation and the payback.",
    faqs: [
      { question: "Which CRMs do you work with?", answer: "HubSpot, Pipedrive, Zoho, Salesforce, and custom CRMs — we automate around what you already use." },
      { question: "What's the fastest win?", answer: "Instant lead routing and automated follow-ups — they recover revenue that's currently slipping through cracks, often within the first weeks." },
      { question: "Will it keep our data clean?", answer: "Yes — auto-enrichment, de-duplication, and validation keep the CRM trustworthy without manual upkeep." },
    ],
    related: ["business-process-automation", "ai-automation-agency", "n8n-automation-agency"],
    keywords: ["crm automation", "crm workflow automation", "lead automation", "sales automation agency"],
    waMessage: "Hi Tech Wolves 👋 I want to automate my CRM and pipeline —",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
