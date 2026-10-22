import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { essays, getEssay } from "@/data/essays";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata(
  props: PageProps<"/essays/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const essay = getEssay(slug);

  if (!essay) {
    return { title: "Essay" };
  }

  return {
    title: essay.title,
    description: essay.subtitle,
    alternates: { canonical: `/essays/${essay.slug}` },
    openGraph: {
      title: essay.title,
      description: essay.subtitle,
      url: `/essays/${essay.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: essay.title,
      description: essay.subtitle,
    },
  };
}

export default async function EssayPage(props: PageProps<"/essays/[slug]">) {
  const { slug } = await props.params;
  const essay = getEssay(slug);

  if (!essay) {
    notFound();
  }

  return (
    <article>
      <Link className={styles.back} href="/essays">
        &larr; All essays
      </Link>
      <p className={styles.venue}>
        {essay.venue ?? "Medium"} &middot; {new Date(essay.date).getFullYear()}
      </p>
      <h1 className={styles.title}>{essay.title}</h1>
      <p className={styles.subtitle}>{essay.subtitle}</p>

      {essay.body && (
        <div className={styles.body}>
          {essay.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      )}

      {essay.tips && (
        <dl className={styles.tips}>
          {essay.tips.map((tip) => (
            <div className={styles.tip} key={tip.term}>
              <dt>{tip.term}</dt>
              <dd>{tip.text}</dd>
            </div>
          ))}
        </dl>
      )}

      {essay.sections &&
        essay.sections.map((section) => (
          <div key={section.heading} className={styles.section}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            <dl className={styles.tips}>
              {section.tips.map((tip) => (
                <div className={styles.tip} key={tip.term}>
                  <dt>{tip.term}</dt>
                  <dd>{tip.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}

      {essay.url && (
        <a className={styles.cta} href={essay.url}>
          Read on {essay.venue ?? "Medium"} &rarr;
        </a>
      )}
    </article>
  );
}
