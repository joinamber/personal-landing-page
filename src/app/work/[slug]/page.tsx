import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { work, getWorkItem } from "@/data/work";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getWorkItem(slug);

  if (!item) {
    return { title: "Work" };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: `/work/${item.slug}`,
      type: "article",
      images: item.ogImage ? [{ url: item.ogImage }] : undefined,
    },
    twitter: {
      card: "summary",
      title: item.title,
      description: item.summary,
      images: item.ogImage ? [item.ogImage] : undefined,
    },
  };
}

export default async function WorkDetailPage(
  props: PageProps<"/work/[slug]">
) {
  const { slug } = await props.params;
  const item = getWorkItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <article>
      <Link className={styles.back} href="/#work">
        &larr; All work
      </Link>
      <p className={styles.tag}>{item.tag}</p>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.summary}>{item.summary}</p>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Role</span>
          <span className={styles.metaValue}>{item.role}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Site</span>
          <span className={styles.metaValue}>
            {item.url === "#"
              ? "In progress"
              : item.siteLabel ?? new URL(item.url).hostname}
          </span>
        </div>
      </div>

      <div className={styles.body}>
        {item.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      {item.stats && (
        <div className={styles.stats}>
          {item.stats.map((stat) => (
            <div key={stat.label}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {item.url !== "#" && (
        <a className={styles.cta} href={item.url}>
          Visit {item.title} &rarr;
        </a>
      )}
    </article>
  );
}
