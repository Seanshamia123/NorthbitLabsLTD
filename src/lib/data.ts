export const SERVICES = [
  {
    id: "custom-software",
    num: "01",
    title: "Custom Software Development",
    pillar: true,
    pillarLabel: "Custom Software",
    description:
      "Systems designed around how your business actually runs. Internal tools, booking platforms, client-facing portals, and line-of-business applications built to your exact workflow — not a template forced onto it.",
    bullets: [
      "Custom booking, scheduling and client management platforms",
      "Financial systems for Fintechs and Banks (CBK standards, AML screening)",
      "Internal admin dashboards and operations consoles",
      "Customer-facing web applications, portals and mobile apps",
      "API integration between the systems your team already uses",
      "Reporting and analytics layers built on top of operational data",
    ],
  },
  {
    id: "ai-operations",
    num: "02",
    title: "AI-Powered Operations & Automation",
    pillar: true,
    pillarLabel: "AI Operations",
    description:
      "Artificial intelligence applied to the work that drains your team's time every week. We identify the repetitive tasks, automate them, and let your people focus on what moves the business forward.",
    bullets: [
      "AI assistants for customer enquiries on WhatsApp, web and email",
      "Automated lead qualification and follow-up sequences",
      "Document and report generation from structured business data",
      "Smart routing of bookings, support tickets and internal requests",
      "Workflow automation connecting the tools your team already uses",
      "AI-driven analysis of customer feedback, reviews and conversations",
    ],
  },
  {
    id: "consulting",
    num: "03",
    title: "Technology Consulting",
    pillar: true,
    pillarLabel: "Consulting",
    description:
      "Not every problem needs a new system. Sometimes the right answer is a better-configured tool, a tighter process, or knowing which battle to pick first. Advisory engagements for leaders who need a clear technology direction before they invest.",
    bullets: [
      "Technology audits and operations reviews",
      "Build-versus-buy decisions on software and platforms",
      "AI-readiness assessments and automation roadmaps",
      "Vendor selection and implementation oversight",
    ],
  },
  {
    id: "web-development",
    num: "04",
    title: "Web Development",
    pillar: false,
    description:
      "Marketing sites, portals, dashboards and storefronts engineered for speed, accessibility and editorial control.",
  },
  {
    id: "mobile",
    num: "05",
    title: "Mobile App Development",
    pillar: false,
    description:
      "Native iOS, native Android and cross-platform codebases (Flutter, React Native) for products that need to feel native to the device.",
  },
  {
    id: "cloud-devops",
    num: "06",
    title: "Cloud & DevOps",
    pillar: false,
    description:
      "AWS, GCP and on-prem. Migration, platform engineering, CI/CD, observability and cost control on infrastructure you can read.",
  },
  {
    id: "data-analytics",
    num: "07",
    title: "Data Engineering & Analytics",
    pillar: false,
    description:
      "Warehouses, pipelines and the reporting layer on top. Useful numbers, in front of the people who decide with them.",
  },
  {
    id: "qa-testing",
    num: "08",
    title: "QA & Testing",
    pillar: false,
    description:
      "Manual, automated, performance and security testing as an embedded function — not a phase tacked on at the end.",
  },
  {
    id: "ui-ux",
    num: "09",
    title: "UI / UX Design",
    pillar: false,
    description:
      "Research, information architecture, interaction and visual design grounded in the same engineering reality the build will live inside.",
  },
  {
    id: "cybersecurity",
    num: "10",
    title: "Cybersecurity",
    pillar: false,
    description:
      "Threat modelling, penetration testing, compliance readiness and secure-by-default patterns built in from day one.",
  },
  {
    id: "fintech",
    num: "11",
    title: "Fintech & Payments",
    pillar: false,
    description:
      "Core banking modules, Mpesa integration, card payments (stk push), KYC/AML, and the regulatory-compliance layer that wraps it all.",
  },
  {
    id: "staff-augmentation",
    num: "12",
    title: "IT Staff Augmentation",
    pillar: false,
    description:
      "Senior engineers embedded inside your team, on your tooling, in your standups. Vetted, ready, available next sprint.",
  },
  {
    id: "modernization",
    num: "13",
    title: "Enterprise Modernization",
    pillar: false,
    description:
      "Legacy systems, untangled. We re-platform, re-architect and re-write without taking the business offline while we do it.",
  },
];

export const INDUSTRIES = [
  {
    num: "/01",
    title: "Fintech & Banking",
    description:
      "Core banking, lending, payments, KYC/AML, treasury and the regulator-facing layer that wraps it. CBK-compliant, AML-ready.",
    slug: "fintech",
    featured: true,
  },
  {
    num: "/02",
    title: "Healthcare",
    description:
      "EHR integrations, patient platforms, telemedicine and clinical workflow tooling.",
    slug: "healthcare",
  },
  {
    num: "/03",
    title: "Wellness & Fitness",
    description:
      "Booking systems, membership platforms, client management and the scheduling layer your instructors actually use.",
    slug: "wellness",
    featured: true,
  },
  {
    num: "/04",
    title: "Retail & E-commerce",
    description:
      "Headless commerce, POS, inventory management, loyalty and the payment integrations your market requires.",
    slug: "retail",
    featured: true,
  },
  {
    num: "/05",
    title: "Beauty & Personal Care",
    description:
      "Booking, staff management, product inventory, client records and the customer-facing experience that wins repeat business.",
    slug: "beauty",
    featured: true,
  },
  {
    num: "/06",
    title: "Brand Building & Media",
    description:
      "Portfolios, content platforms, CRM for influencers and the digital presence that lands brand deals.",
    slug: "media",
    featured: true,
  },
  {
    num: "/07",
    title: "Logistics & Supply Chain",
    description:
      "Fleet management, freight, warehouse and last-mile visibility tools.",
    slug: "logistics",
  },
  {
    num: "/08",
    title: "Real Estate & PropTech",
    description:
      "Listings, leasing, property operations and smart-building integrations.",
    slug: "proptech",
  },
  {
    num: "/09",
    title: "Education & EdTech",
    description:
      "Learning platforms, assessment, credentialing and student-outcome analytics.",
    slug: "edtech",
  },
  {
    num: "/10",
    title: "Professional Services",
    description:
      "Client management, billing, workflow automation and the reporting layer for service-led businesses.",
    slug: "professional-services",
  },
];

export const CLIENTS = [
  {
    id: "magena-pilates",
    name: "Magena Pilates",
    category: "Wellness & Fitness",
    tags: ["CUSTOM SOFTWARE", "WEB"],
    url: "https://www.magenapilates.com/",
    logo: "/logos/magena-pilates.jpg",
    brandColor: "#3D3530",
    headline: "Pre-order platform with waiting-list logic for a pilates studio.",
    description:
      "Built a tailor-made business software system supporting client early access via a waiting-list and pre-order flow. The studio now manages new client intake without manual back-and-forth.",
    outcomes: [
      "Automated waiting list and pre-order management",
      "Client early-access flow with zero manual coordination",
      "Studio owner manages intake from one dashboard",
    ],
    status: "Live",
  },
  {
    id: "premier-beauty",
    name: "Premier Beauty Clinic",
    category: "Beauty & Personal Care",
    tags: ["E-COMMERCE", "PAYMENTS", "AI"],
    url: "https://premierbeautyclinic.vercel.app/",
    logo: "/logos/premier-beauty.png",
    brandColor: "#6D4C91",
    headline: "E-commerce system with Mpesa integration and AI roadmap.",
    description:
      "End-to-end e-commerce and employee management system: content management, inventory, Mpesa STK push and card collections. AI solutions for customers are in active development, alongside a dedicated mobile application.",
    outcomes: [
      "Full e-commerce with Mpesa STK push and card payments",
      "Inventory and employee management in one system",
      "AI customer solutions in development",
      "Mobile application in active build",
    ],
    status: "Live + Expanding",
  },
  {
    id: "ssocials",
    name: "S.Socials",
    category: "Brand Building & Wellness",
    tags: ["WEB", "BRAND"],
    url: "https://ssocials.co/",
    logo: "/logos/ssocials.svg",
    brandColor: "#03234d",
    headline: "Portfolio platform built to convert brand deals.",
    description:
      "Developed a high-conversion portfolio for a brand-building client targeting corporate partnerships. The site is designed to communicate credibility to potential brand partners and close deals.",
    outcomes: [
      "Portfolio built for brand-deal conversion",
      "Credibility-first design for corporate audiences",
      "Live and actively attracting partnerships",
    ],
    status: "Live",
  },
];

export const STATS = [
  { num: "100%", label: "Senior practitioners on every engagement. No junior handoffs, ever." },
  { num: "3", label: "Active client partnerships, each one personally earned and referenced." },
  { num: "5", label: "Working days to receive a written proposal after your first call." },
  { num: "30", label: "Minute discovery call — no pitch deck, no fluff — to start every engagement." },
];

export const HOW_WE_WORK = [
  {
    num: "01",
    title: "Discover",
    description:
      "We sit down with the client — owners, managers and the people doing the actual work — to map how the business runs today. We document the bottlenecks, the workarounds and the things that already work well. No assumptions.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We propose the smallest system that solves the problem properly. Every recommendation includes what it does, what it costs, what it saves and when it ships. Clients approve before we build.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We develop in short cycles with weekly demos. Clients see progress every week and can change direction without paying for rework on a six-month roadmap.",
  },
  {
    num: "04",
    title: "Deploy & Support",
    description:
      "We launch, train the team and stay on for a defined support period. We do not disappear after handover. Most clients keep us on a light retainer for improvements and new initiatives.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Senior practitioners, not junior handoffs",
    description:
      "Every line of code, every workflow, every recommendation comes from people who have done this before. You speak directly to the person solving your problem.",
  },
  {
    title: "Built around your business, not ours",
    description:
      "We do not have a product to push. We do not earn commissions from any platform. Our only incentive is to recommend the right solution.",
  },
  {
    title: "Speed without shortcuts",
    description:
      "Small teams move faster. We ship working systems in weeks or months depending on scope because there are no layers between the client and the build.",
  },
  {
    title: "Honest about cost and value",
    description:
      "Every proposal shows exactly what you will pay, what you will get and what business outcome it is expected to drive. If we do not think a project will pay back, we will tell you.",
  },
  {
    title: "Local, accountable, available",
    description:
      "We are registered in Kenya and based locally. You can reach us, meet us in person and hold us accountable.",
  },
];

export const ENGAGEMENT_MODELS = [
  {
    model: "Project",
    bestFor: "A defined system or automation with a clear scope and outcome",
    howItWorks: "Fixed scope, fixed price, agreed milestones and timeline",
  },
  {
    model: "Retainer",
    bestFor: "Ongoing improvements, support and new initiatives",
    howItWorks: "Monthly hours allocated to your business; flexible scope within the retainer",
  },
  {
    model: "Consultation",
    bestFor: "Decisions, audits or roadmaps before a build commitment",
    howItWorks: "Hourly or fixed-fee advisory; no obligation to proceed to a build",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const CONTACT = {
  email: "northbitlabs@gmail.com",
  phone: "+254 795 684 258",
  address: "Number 8, Nosim Road, Kiserian",
  district: "Kajiado North District, Kenya",
  postal: "P.O. Box 00511, Ongata Rongai, Kenya",
  founder: "Sean Paul Shamia",
  founderTitle: "Founder & CEO",
};
