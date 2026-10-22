export type WorkItem = {
  slug: string;
  title: string;
  tag: string;
  oneLiner: string;
  url: string;
  siteLabel?: string;
  ogImage?: string;
  role: string;
  summary: string;
  body: string[];
  stats?: { label: string; value: string }[];
  quote?: { text: string; attribution: string };
};

export const work: WorkItem[] = [
  {
    slug: "adaptive-intelligence",
    title: "Adaptive Intelligence",
    tag: "Enterprise AI",
    oneLiner: "Built for the adaptive enterprise.",
    url: "https://www.adptv.xyz/",
    role: "Founder",
    summary:
      "Advancing the frontier of enterprise intelligence through rigorous research and engineering.",
    body: [
      "Legacy ERP systems assume that data flows, user behavior, and organizational structure are fixed. Adaptive Intelligence starts from the opposite assumption: that enterprise software should keep learning from the organization it runs on.",
      "The work draws on three research areas — large language models for contextual understanding of business processes, multi-agent systems for distributed decision-making, and causal inference for counterfactual and intervention planning — applied first to banking, finance, and e-commerce operations. Early focus areas include automated reconciliation and faster financial close, dynamic cash-flow forecasting, and continuous regulatory compliance monitoring.",
    ],
  },
  {
    slug: "creativeacts",
    title: "Creative Acts",
    tag: "AI Product Lab",
    oneLiner: "Discovery takes creativity. Change takes acts. We do both.",
    url: "https://www.adptv.xyz/creativeacts",
    siteLabel: "https://www.adptv.xyz/creativeacts",
    ogImage: "/creativeacts-og.png",
    role: "Researcher",
    summary:
      "Creative Acts builds solutions at the intersection of innovation and design — the forward-deployed mindset that pushes the boundaries of what's possible.",
    body: [
      "Creative Acts is the studio through which I incubate and ship AI-native products. Every initiative runs through the same three-part process: discovery (mapping human needs and technology shifts), design (rapid, hands-on prototyping, iterating in public), and launch (shipping as a forward-deployed, embedded team).",
      "Current initiatives under the studio span behavioral AI (HyperPersona — building user personas for DTC brands and startups to run personalized campaigns), media (The Contrarian Economist, a podcast on overlooked economic data), agentic commerce (authentication and catalog infrastructure for AI agents transacting on a business's behalf), and education (VibeCraft, a cohort-based learning program, and Day of AI Singapore, run with MIT RAISE and i2 Learning).",
      "The through-line across all of them: treating AI adoption as a design problem first and an engineering problem second.",
    ],
  },
  {
    slug: "the-contrarian-economist",
    title: "The Contrarian Economist",
    tag: "Media / Podcast",
    oneLiner:
      "A podcast surfacing the economic data and trends everyone else is ignoring.",
    url: "https://open.spotify.com/show/5qMwiP1Ismiv6lvJ02exns",
    role: "Creator",
    summary:
      "An AI-hosted podcast digging into overlooked economic data, hidden market signals, and counterintuitive trends shaping the global economy.",
    body: [
      "Most economic commentary repeats the same headline numbers without asking what's underneath them. The Contrarian Economist picks apart one dataset or event per episode — tariffs, rare-earth supply chains, GDP's blind spots around AI, off-balance-sheet corporate debt — and follows it to where it actually shows up: shipping routes, grocery receipts, credit spreads.",
      "The show is hosted by two AI personas, Alex and Jordan, built to read between the lines of market data that most coverage skips past.",
    ],
  },
  {
    slug: "umify",
    title: "Umify",
    tag: "Fintech",
    oneLiner: "Cross-border payments built for the freelance economy.",
    url: "https://umify.io",
    role: "Founder",
    summary:
      "Umify streamlines global hiring, compliance, and payments for the freelance economy — risk-free payroll across 20+ countries.",
    body: [
      "Paying and staying compliant with an international contractor workforce usually means stitching together separate tools for contracts, tax compliance, and currency conversion. Umify combines those into a single dashboard: multi-currency accounts, automated compliance, and payments in 120+ currencies.",
      "The platform is built for both sides of the relationship — businesses hiring globally, and freelancers who want to get paid faster and with lower fees than traditional cross-border transfers.",
    ],
    stats: [
      { label: "Countries served", value: "20+" },
      { label: "Currencies supported", value: "120+" },
    ],
  },
  {
    slug: "trailblazer",
    title: "Trailblazer",
    tag: "DTC / Retail",
    oneLiner: "A global launchpad for ambitious direct-to-consumer brands.",
    url: "https://gotrailblazer.cc/",
    role: "Partner",
    summary:
      "The Trailblazer Network (TTN) helps DTC brands scale across Asia Pacific and Europe — sourcing, product development, market entry, and logistics in one platform.",
    body: [
      "Most DTC brands trying to expand internationally hit the same wall: sourcing, compliance, and logistics are each solved by a different vendor, in a different country, on a different timeline. Trailblazer runs discovery, development, launch, and scale as one continuous process instead.",
      "The network works with beauty, wellness, fashion, electronics, and lifestyle brands, with teams across Singapore, Manila, Hong Kong, and London.",
    ],
    stats: [
      { label: "Brands launched", value: "15+" },
      { label: "Markets entered", value: "10+" },
      { label: "Success rate", value: "95%" },
      { label: "Cost saved for clients", value: "$300K+" },
    ],
  },
  {
    slug: "foundercare",
    title: "FounderCare",
    tag: "Founder Wellness",
    oneLiner: "A support network for founder wellbeing.",
    url: "https://www.foundercare.space/",
    role: "Partner",
    summary:
      "A support network built to combat founder burnout through regular 1-1 conversations and community.",
    body: [
      "Startup founders are expected to be constantly available for customers and investors, which leaves little infrastructure for their own mental hygiene. FounderCare exists to close that gap: guided 1-1 chats between founders, a support network to lean on, and an early-founder kit for the first 6–12 months.",
      "It's built for early founders navigating their first year, solo founders without a co-founder to talk to, and any founder who wants a support network beyond their own team.",
    ],
    stats: [
      { label: "Founders in network", value: "100+" },
      { label: "Countries represented", value: "20+" },
    ],
  },
];

export function getWorkItem(slug: string) {
  return work.find((item) => item.slug === slug);
}
