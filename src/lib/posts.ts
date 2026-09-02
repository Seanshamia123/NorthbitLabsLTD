export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO 8601
  readTime: string;
  author: string;
  body: PostBlock[];
  faq?: { question: string; answer: string }[];
}

export const POSTS: Post[] = [
  {
    slug: "ai-automation-for-african-smes-where-to-start",
    title: "AI Automation for African SMEs: Where to Start",
    excerpt:
      "Most businesses don't need a company-wide AI strategy. They need one repetitive, time-consuming process automated well. Here's how we help clients find that first process.",
    category: "AI Operations",
    date: "2026-08-10",
    readTime: "6 min read",
    author: "Sean Paul Shamia",
    body: [
      {
        type: "p",
        text: "Every founder we talk to has heard the AI pitch a dozen times. Fewer have seen it actually change how their business runs day to day. The gap usually comes down to asking the wrong question, not a technology problem. Instead of asking \"where can we use AI,\" the useful question is \"what does my team do every week that a system could do instead.\"",
      },
      {
        type: "h2",
        text: "Start with the boring, repetitive work",
      },
      {
        type: "p",
        text: "The highest-return automations we've built for clients across Kenya and East Africa are rarely glamorous. They're the WhatsApp inbox that gets forty near-identical enquiries a day. The spreadsheet someone updates by hand every morning. The follow-up message that gets sent, or forgotten, after every lead. None of these need a custom AI model. They need a well-built assistant wired into the tools your team already uses.",
      },
      {
        type: "list",
        items: [
          "Customer enquiries answered instantly on WhatsApp, web chat or email, with a clean handoff to a human when it matters",
          "Leads automatically qualified and routed before your team even opens their inbox",
          "Reports and documents generated from data that already lives in your systems",
          "Bookings, support tickets and internal requests routed to the right person automatically",
        ],
      },
      {
        type: "link",
        text: "See how we build AI-powered operations & automation",
        href: "/services#ai-operations",
      },
      {
        type: "h2",
        text: "Measure the hours back, not the technology",
      },
      {
        type: "p",
        text: "We size every automation project in hours returned to the business per week, not in features shipped. A client who gets back fifteen hours of manual follow-up work each week can redeploy that time into sales, service or simply going home on time. That's the number that matters. The AI underneath is just the mechanism.",
      },
      {
        type: "p",
        text: "If you're not sure where your first automation should be, that's normal. Most businesses aren't. Book a discovery call and we'll walk through your operations together and point at the one process worth automating first.",
      },
    ],
  },
  {
    slug: "why-custom-software-beats-off-the-shelf-for-growing-fintechs",
    title: "Why Custom Software Beats Off-the-Shelf for Growing Fintechs",
    excerpt:
      "Off-the-shelf tools get a fintech to launch. They rarely get it through a CBK audit, an AML review, or the operational complexity that comes with real growth.",
    category: "Fintech",
    date: "2026-07-22",
    readTime: "7 min read",
    author: "Sean Paul Shamia",
    body: [
      {
        type: "p",
        text: "Every fintech we've worked with in Kenya started the same way: a fast MVP built on off-the-shelf tools, stitched together to prove the idea works. That's the right call early on. The problem is when that stack is still the foundation two years later, once real transaction volume, real regulators and real customer trust are on the line.",
      },
      {
        type: "h2",
        text: "Where off-the-shelf tools start to break",
      },
      {
        type: "p",
        text: "Generic platforms are built for the average use case, not yours. For a fintech operating under CBK standards, that shows up fast: AML screening that needs custom rules, reconciliation logic that doesn't fit a generic ledger, or an Mpesa integration that needs to handle edge cases the template was never designed for. You end up building workarounds on top of a system that was supposed to save you time.",
      },
      {
        type: "list",
        items: [
          "AML and KYC screening tuned to how your business actually assesses risk, not a generic checklist",
          "Reconciliation and reporting that matches CBK requirements out of the box",
          "Mpesa and payment integrations built for your transaction flows, not a demo flow",
          "A system that can absorb a new product line or market without a rebuild",
        ],
      },
      {
        type: "link",
        text: "See our fintech & banking work",
        href: "/industries#fintech",
      },
      {
        type: "h2",
        text: "Custom doesn't mean starting from zero",
      },
      {
        type: "p",
        text: "The most cost-effective path for most growing fintechs is replacing the parts of the stack that are actually constraining growth, not ripping everything out. We've done this for clients moving off patchwork MVPs onto systems built specifically for compliance-heavy, high-volume operations, without pausing the business to do it.",
      },
      {
        type: "p",
        text: "If your current stack is starting to feel like it's fighting you instead of helping you, that's usually the signal it's time for this conversation.",
      },
    ],
  },
  {
    slug: "mpesa-integration-what-kenyan-businesses-get-wrong",
    title: "Mpesa Integration: What Kenyan Businesses Get Wrong",
    excerpt:
      "The Daraja API documentation makes Mpesa integration look simple. Production traffic (failed callbacks, duplicate transactions, timeouts) tells a different story.",
    category: "Custom Software",
    date: "2026-06-30",
    readTime: "5 min read",
    author: "Sean Paul Shamia",
    body: [
      {
        type: "p",
        text: "Almost every business we work with in Kenya eventually needs Mpesa integrated somewhere: a booking platform, a fintech ledger, an internal payments dashboard. The Daraja API sandbox makes it look like an afternoon's work. Production traffic tells a different story.",
      },
      {
        type: "h2",
        text: "The failure modes that don't show up in testing",
      },
      {
        type: "list",
        items: [
          "STK push callbacks that never arrive, or arrive twice, and need idempotent handling",
          "Timeouts on Safaricom's side that leave a transaction in limbo until it's reconciled",
          "Customers closing the prompt or losing signal mid-payment, with no clean way to know the outcome",
          "Reconciliation between what your system recorded and what Safaricom actually settled",
        ],
      },
      {
        type: "p",
        text: "None of these are exotic edge cases. They're what a real customer base produces at volume. A system that hasn't been built to expect them will eventually show a customer \"payment failed\" for a payment that actually went through, or worse, the reverse.",
      },
      {
        type: "link",
        text: "More on how we build for fintech & banking",
        href: "/industries#fintech",
      },
      {
        type: "h2",
        text: "Build for reconciliation from day one",
      },
      {
        type: "p",
        text: "The integrations that hold up under real usage treat the callback as one signal among several, not the source of truth. That means a reconciliation job that checks transaction status directly, idempotency keys that prevent double-processing, and clear operator visibility when something needs a human to look at it. It's more work upfront. It's much less work at 11pm when a customer says they paid and your system says they didn't.",
      },
    ],
  },
  {
    slug: "how-much-does-custom-software-cost-in-kenya",
    title: "How Much Does Custom Software Development Cost in Kenya?",
    excerpt:
      "There's no single number, and you should be suspicious of anyone who gives you one before understanding your business. Here's what actually drives the price, and how we structure engagements.",
    category: "Custom Software",
    date: "2026-08-28",
    readTime: "5 min read",
    author: "Sean Paul Shamia",
    body: [
      {
        type: "p",
        text: "There's no single number, and treat anyone who gives you one before understanding your business with real suspicion. What we can tell you honestly is what actually moves the price up or down, and how we structure engagements so you're never paying for scope you didn't ask for.",
      },
      {
        type: "h2",
        text: "What actually drives the price",
      },
      {
        type: "list",
        items: [
          "How many workflows the system needs to support, not how many screens it has",
          "Whether it needs to integrate with systems you already run (Mpesa, a POS, an existing database) versus starting clean",
          "Compliance requirements: a CBK-regulated fintech build carries more engineering and review overhead than an internal booking tool",
          "Whether you need ongoing support after launch, or a one-time build handed over cleanly",
        ],
      },
      {
        type: "h2",
        text: "Three ways we structure an engagement",
      },
      {
        type: "p",
        text: "Project engagements are fixed scope, fixed price, with agreed milestones and a timeline: the right fit when you already know what you're building. Retainers allocate monthly hours to your business for ongoing improvements, support and new initiatives, with flexible scope inside that allocation. Consultation is hourly or fixed-fee advisory work (audits, build-versus-buy decisions, roadmaps) with no obligation to proceed to a build afterward.",
      },
      {
        type: "p",
        text: "The honest answer to \"how much\" is: tell us what you're trying to build, and we'll size it against one of these three models in a single call. No proposal fee, no obligation.",
      },
      {
        type: "link",
        text: "Get a specific number for your project",
        href: "/contact",
      },
    ],
    faq: [
      {
        question: "Does Northbit Labs charge a flat rate for all software projects?",
        answer:
          "No. Pricing depends on the engagement model and scope. Project work is fixed-price against an agreed scope; Retainers are a monthly allocation of hours; Consultation is hourly or fixed-fee advisory work.",
      },
      {
        question: "Can I get a price without committing to a project?",
        answer:
          "Yes. That's what a Consultation engagement is for: an hourly or fixed-fee audit or roadmap, with no obligation to proceed to a build.",
      },
      {
        question: "Is fintech software more expensive to build?",
        answer:
          "Usually, yes. CBK compliance, AML screening and the review overhead that comes with regulated financial systems add engineering time that a standard internal tool doesn't need.",
      },
    ],
  },
  {
    slug: "what-is-an-ai-readiness-assessment",
    title: "What Is an AI Readiness Assessment (and Do You Need One)?",
    excerpt:
      "It's the audit that should happen before you buy a specific AI product: a structured look at where automation would actually work in your business.",
    category: "AI Operations",
    date: "2026-08-18",
    readTime: "5 min read",
    author: "Sean Paul Shamia",
    body: [
      {
        type: "p",
        text: "An AI readiness assessment is a short, structured review of your business's data, workflows and tools to find out where AI automation would actually work, and where it wouldn't yet. Think of it as the audit that should happen before you buy a specific product, not a pitch for one.",
      },
      {
        type: "h2",
        text: "What we're actually looking at",
      },
      {
        type: "list",
        items: [
          "Where your team's time is going: which repetitive tasks eat the most hours each week",
          "What data already exists in a usable form, and what's still trapped in someone's head or a spreadsheet",
          "Which tools you already run, and whether they can be connected instead of replaced",
          "What a failure mode looks like: where a wrong AI-driven decision would actually cost you",
        ],
      },
      {
        type: "h2",
        text: "What comes out of it",
      },
      {
        type: "p",
        text: "A prioritized roadmap, sized in hours returned to the business per week rather than features shipped. That's the same standard we hold every automation we build to. You leave knowing which process is worth automating first, whether that's something we build together or something you take to another team.",
      },
      {
        type: "link",
        text: "See our Technology Consulting service line",
        href: "/services#consulting",
      },
      {
        type: "p",
        text: "If you're not sure where to start, that's normal. Most founders aren't. Book a discovery call and we'll walk through your operations together.",
      },
    ],
    faq: [
      {
        question: "How long does an AI readiness assessment take?",
        answer:
          "It's a Consultation engagement: hourly or fixed-fee advisory work scoped to your business, not a multi-month audit.",
      },
      {
        question: "Do I need to already have AI in mind to book one?",
        answer:
          "No. Most founders who book one don't know where to start. That's the point of the assessment: to find the highest-return automation, not to validate a tool you've already picked.",
      },
      {
        question: "Does the assessment commit me to a build?",
        answer:
          "No. Consultation engagements carry no obligation to proceed to a Project or Retainer afterward.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
