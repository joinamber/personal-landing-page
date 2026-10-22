export type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  venue?: string;
  url?: string;
  body?: string[];
  tips?: { term: string; text: string }[];
  sections?: {
    heading: string;
    tips: { term: string; text: string }[];
  }[];
};

export const essays: Essay[] = [
  {
    slug: "ai-cheaper-worth-less",
    title:
      "When AI Makes Your Product Cheaper to Build, Does It Make It Worth Less to Sell?",
    subtitle:
      "A tale of two software giants navigating the productivity-pricing paradox",
    date: "2026-09-19",
    url: "https://medium.com/@amber-liang/when-ai-makes-your-product-cheaper-to-build-does-it-make-it-worth-less-to-sell-9352ee0d9ed4",
  },
  {
    slug: "is-product-management-dead",
    title: "Is Product Management Dead? Reflections on Its Evolution in the AI Era",
    subtitle: "The evolution of product management in the age of AI.",
    date: "2025-05-01",
    url: "https://medium.com/@amber-liang/is-product-management-dead-reflections-on-its-evolution-in-the-ai-era-ed30df7a00ee",
  },
  {
    slug: "redefining-the-career-break",
    title: "Redefining the Career Break: How I Found Growth, Fulfilment, and Purpose",
    subtitle:
      "A tech founder's journey of surrendering, experimenting, and evolving after leaving corporate roles.",
    date: "2025-05-01",
    url: "https://medium.com/@amber-liang/redefining-the-career-break-how-i-found-growth-fulfilment-and-purpose-f78f5e6e41e0",
  },
  {
    slug: "building-enterprise-ai-2",
    title: "What I Have Learned from Building Enterprise AI (2/2)",
    subtitle: "The evolution of customer support AI.",
    date: "2025-01-13",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "building-enterprise-ai-1",
    title: "What I Have Learned from Building Enterprise AI (1/2)",
    subtitle: "What do enterprises care most about?",
    date: "2025-01-10",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "becoming-a-founder-3",
    title: "Becoming a Founder (3/3)",
    subtitle: "A pivot is a change in strategy without a change in vision.",
    date: "2023-07-06",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "becoming-a-founder-2",
    title: "Becoming a Founder (2/3)",
    subtitle: "Experiment and learn rapidly to survive and succeed.",
    date: "2023-07-06",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "becoming-a-founder-1",
    title: "Becoming a Founder (1/3)",
    subtitle: "How I got started.",
    date: "2023-01-18",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "managing-a-fully-remote-team",
    title: "How to Manage a Fully Remote Team",
    subtitle: "Tips and lessons from the past 6 months.",
    date: "2023-01-11",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "hiring-is-an-endurance-sport",
    title: "Hiring Is an Endurance Sport",
    subtitle: "As any startup founder hungry for talent knows, hiring is always top of mind.",
    date: "2023-01-04",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "meaningful-data-visualization",
    title: "Amplify Your Product with Meaningful Data Visualization",
    subtitle: "From product manager to product manager.",
    date: "2020-10-11",
    url: "https://medium.com/@amber-liang",
  },
  {
    slug: "digital-nomad-experiment",
    title: "My Digital Nomad Experiment",
    subtitle:
      "Trading a five-year apartment for a suitcase, a yoga mat, and a location-independent year across Thailand and the Philippines.",
    date: "2022-01-01",
    venue: "Personal essay",
    body: [
      "My digital nomad journey began with my departure from a cozy apartment that had been my home for five years. In preparation, I sold all my furniture and gave away items accumulated over the pandemic years. As I set out for the airport, I carried only a large suitcase, a carry-on, a backpack, and a yoga mat, ready for a minimalist lifestyle.",
      "My initial destination was the serene town of Chainat, Thailand, located a couple of hours from Bangkok, the capital city. Fortunately, my then co-founder at Umify, Jin, was there to help me settle in seamlessly. Packing my possessions into the back of a Sportwagon, we drove down the bustling Bangkok highways. For a month, I immersed myself in building the startup, starting from scrappy notes on a whiteboard and progressing to a business proposal that garnered our first pre-seed investment. Despite long hours of working, staying in the peaceful countryside allowed me to focus and commit entirely to developing the MVP. Occasionally, I stepped out for a breath of fresh air, admiring the evergreen plantations. To my surprise, I didn't miss the bustling city life and felt happy with my decision to embark on a digital nomad adventure.",
      "Following my stint in Chainat, I settled into a chic British-style apartment in Bangkok found on Airbnb. I relished exploring the lively city scene, frequently getting GrabBike rides to different neighborhoods to visit art centers and attend open mic events. Being in a stimulating environment inspired me to explore new things, such as obtaining a scuba diving license. I traveled to Ko Tao, an idyllic island nearby, to fulfill this long-held aspiration, savoring the soft sand and magical sunsets. Despite juggling the management of my newly funded startup, I remained productive by embracing a location-independent lifestyle.",
      "In late August, I bid farewell to Thailand and traveled to the capital of the Philippines. Staying mainly in Manila during September, I also took a two-week trip to Cebu City, where I indulged in some of the best seafood and homemade Filipino dishes.",
      "For anyone who is looking to work from anywhere, I would recommend a few things to consider aside from the top of mind — personal finance, visas, accommodations, transportation, and the like:",
    ],
    tips: [
      {
        term: "Wifi",
        text: "I only started to appreciate a stable wifi network until I had to look for one while traveling in and out of cities. Make sure to inquire about the wifi situation and carry a personal hotspot as a backup.",
      },
      {
        term: "Health insurance",
        text: "There is only a handful of health insurance that cater to the needs of digital nomads. Make sure to conduct thorough research and obtain insurance coverage before embarking on any travel.",
      },
      {
        term: "Routine",
        text: "Establishing a daily routine can help to maintain focus and productivity, even while adapting to changing environments.",
      },
      {
        term: "Travel buddies",
        text: "Solo travel can be isolating, especially over an extended period. Consider seeking out like-minded individuals or establishing bonds with new acquaintances to reduce feelings of loneliness.",
      },
    ],
  },
  {
    slug: "a-new-years-pledge",
    title: "A New Year's Pledge",
    subtitle:
      "A public, dated commitment — professional and personal — renewed and graded each year.",
    date: "2024-01-01",
    venue: "Personal essay",
    body: [
      "Every year I write down a pledge — a mix of professional targets and personal commitments — and make it public. The point isn't the list itself, it's revisiting it a year later and being honest about what actually held.",
    ],
    sections: [
      {
        heading: "This Year's Pledge",
        tips: [
          {
            term: "AI Product Launch",
            text: "Discover novel use cases and launch 5 impactful AI products and services.",
          },
          {
            term: "Build a high-performing team",
            text: "Constructing a highly collaborative and goal-oriented culture to build a great team and make work meaningful.",
          },
          {
            term: "3 Embedded Finance Partnership Launches",
            text: "Deliver 3 successful product launches with embedded finance partners.",
          },
          {
            term: "20 Networks",
            text: "Build 20 networks meant to last — forging meaningful connections that enhance personal and professional growth, and contribute positively to the community.",
          },
        ],
      },
      {
        heading: "2023 Pledge",
        tips: [
          {
            term: "4 Profit-Generating Product Launches ✅",
            text: "Launching Umify's MVP in Q1 '23 to offer assisted payment solutions to freelancers and their clients.",
          },
          {
            term: "20% on Passive Income ✅",
            text: "Learning and testing strategies to generate passive income in Q1, building toward a viable, sustainable approach by Q2.",
          },
          {
            term: "Long-Term Financial Planning 🛠️",
            text: "Constructing a long-term financial plan tailored to my family's requirements and my own.",
          },
          {
            term: "20 Networks 🛠️",
            text: "Building 20 networks meant to last.",
          },
        ],
      },
      {
        heading: "2022 Pledge",
        tips: [
          {
            term: "Zero New Fashion ✅",
            text: "Swapped 50+ pieces of clothing instead of buying new, using Swapaholic, a Singaporean startup for recycling clothing and accessories.",
          },
          {
            term: "5% a Month ✅",
            text: "Donated regularly to causes supporting education, senior care, children and women, and mental health — aiming for 5% of income every month.",
          },
          {
            term: "1,000 Hours ✅",
            text: "Became a mentor on ADPList, coaching aspiring career explorers, career movers, and junior product managers.",
          },
          {
            term: "Daily Gratitude ✅",
            text: "A daily practice of gratitude, to reset a tangled mind and open it back up.",
          },
        ],
      },
    ],
  },
];

export function getEssay(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}

const featuredSlugs = [
  "ai-cheaper-worth-less",
  "is-product-management-dead",
  "redefining-the-career-break",
  "digital-nomad-experiment",
];

export const featuredEssays = featuredSlugs
  .map((slug) => getEssay(slug))
  .filter((essay): essay is Essay => Boolean(essay));
