import type { MetadataRoute } from "next";
import { work } from "@/data/work";
import { essays } from "@/data/essays";

export const dynamic = "force-static";

const BASE_URL = "https://www.amberliang.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/essays`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...work.map((item) => ({
      url: `${BASE_URL}/work/${item.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...essays.map((essay) => ({
      url: `${BASE_URL}/essays/${essay.slug}`,
      lastModified: essay.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
