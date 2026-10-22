import Link from "next/link";
import type { Metadata } from "next";
import { essays } from "@/data/essays";
import styles from "./page.module.css";

const description =
  "Writing on product, AI, and building — mostly published on Medium.";

export const metadata: Metadata = {
  title: "Essays",
  description,
  alternates: { canonical: "/essays" },
  openGraph: {
    title: "Essays — Amber Liang",
    description,
    url: "/essays",
    type: "website",
  },
};

export default function EssaysPage() {
  return (
    <article>
      <Link className={styles.back} href="/#essays">
        &larr; Back
      </Link>
      <h1 className={styles.heading}>Essays</h1>
      <p className={styles.lede}>
        Writing on product, AI, and building — mostly published on Medium.
      </p>

      {essays.map((essay) => (
        <Link
          key={essay.slug}
          className={styles.item}
          href={`/essays/${essay.slug}`}
        >
          <span className={styles.venue}>
            {new Date(essay.date).getFullYear()}
          </span>
          <span>
            <p className={styles.title}>{essay.title}</p>
            <p className={styles.subtitle}>{essay.subtitle}</p>
          </span>
        </Link>
      ))}
    </article>
  );
}
