export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO 8601
  readTime: string;
  author: string;
  body: PostBlock[];
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
    author: "Northbit Labs",
    body: [
      {
        type: "p",
        text: "Every founder we talk to has heard the AI pitch a dozen times. Fewer have seen it actually change how their business runs day to day. The gap usually isn't the technology — it's that most AI projects start with the wrong question. Instead of asking \"where can we use AI,\" the useful question is \"what does my team do every week that a system could do instead.\"",
      },
      {
        type: "h2",
        text: "Start with the boring, repetitive work",
      },
      {
        type: "p",
        text: "The highest-return automations we've built for clients across Kenya and East Africa are rarely glamorous. They're the WhatsApp inbox that gets forty near-identical enquiries a day. The spreadsheet someone updates by hand every morning. The follow-up message that gets sent — or forgotten — after every lead. None of these need a custom AI model. They need a well-built assistant wired into the tools your team already uses.",
      },
      {
        type: "list",
        items: [
          "Customer enquiries answered instantly on WhatsApp, web chat or email — with a clean handoff to a human when it matters",
          "Leads automatically qualified and routed before your team even opens their inbox",
          "Reports and documents generated from data that already lives in your systems",
          "Bookings, support tickets and internal requests routed to the right person automatically",
        ],
      },
      {
        type: "h2",
        text: "Measure the hours back, not the technology",
      },
      {
        type: "p",
        text: "We size every automation project in hours returned to the business per week, not in features shipped. A client who gets back fifteen hours of manual follow-up work each week can redeploy that time into sales, service or simply going home on time. That's the number that matters — the AI underneath is just the mechanism.",
      },
      {
        type: "p",
        text: "If you're not sure where your first automation should be, that's normal — most businesses aren't. Book a discovery call and we'll walk through your operations together and point at the one process worth automating first.",
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
    author: "Northbit Labs",
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
        type: "h2",
        text: "Custom doesn't mean starting from zero",
      },
      {
        type: "p",
        text: "The most cost-effective path for most growing fintechs isn't to rip everything out — it's to replace the parts of the stack that are actually constraining growth, while keeping what works. We've done this for clients moving off patchwork MVPs onto systems built specifically for compliance-heavy, high-volume operations, without pausing the business to do it.",
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
      "The Daraja API documentation makes Mpesa integration look simple. Production traffic — failed callbacks, duplicate transactions, timeouts — tells a different story.",
    category: "Custom Software",
    date: "2026-06-30",
    readTime: "5 min read",
    author: "Northbit Labs",
    body: [
      {
        type: "p",
        text: "Almost every business we work with in Kenya eventually needs Mpesa integrated somewhere — a booking platform, a fintech ledger, an internal payments dashboard. The Daraja API sandbox makes it look like an afternoon's work. Production traffic tells a different story.",
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
        text: "None of these are exotic edge cases — they're what a real customer base produces at volume. A system that hasn't been built to expect them will eventually show a customer \"payment failed\" for a payment that actually went through, or worse, the reverse.",
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
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
