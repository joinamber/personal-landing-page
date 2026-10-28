import Link from "next/link";
import { work } from "@/data/work";
import { featuredEssays } from "@/data/essays";
import { experience } from "@/data/experience";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.srOnly}>
        Amber Liang — founder working at the intersection of AI, product, and
        policy
      </h1>

      <section className={styles.section} id="work">
        <div className={styles.sectionLabel}>
          <h2>Work</h2>
          <span className={styles.sectionRule} />
        </div>

        {work.map((item) => (
          <Link
            key={item.slug}
            className={styles.workItem}
            href={`/work/${item.slug}`}
          >
            <span className={styles.workTag}>{item.tag}</span>
            <span>
              <p className={styles.workTitle}>{item.title}</p>
              <p className={styles.workDesc}>{item.oneLiner}</p>
              <span className={styles.workLink}>dive in &rarr;</span>
            </span>
          </Link>
        ))}
      </section>

      <section className={styles.section} id="essays">
        <div className={styles.sectionLabel}>
          <h2>Essays</h2>
          <span className={styles.sectionRule} />
        </div>

        {featuredEssays.map((essay) => (
          <Link
            key={essay.slug}
            className={styles.minorItem}
            href={`/essays/${essay.slug}`}
          >
            <span className={styles.minorVenue}>
              {new Date(essay.date).getFullYear()}
            </span>
            <span>
              <p className={styles.minorTitle}>{essay.title}</p>
              <p className={styles.minorSubtitle}>{essay.subtitle}</p>
            </span>
          </Link>
        ))}
        <Link className={styles.workLink} href="/essays">
          all essays &rarr;
        </Link>
      </section>

      <section className={styles.section} id="community">
        <div className={styles.sectionLabel}>
          <h2>Community</h2>
          <span className={styles.sectionRule} />
        </div>

        {experience.map((item) => (
          <a
            key={item.org}
            className={styles.minorItem}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.minorVenue}>{item.org}</span>
            <span>
              <p className={styles.minorTitle}>{item.role}</p>
              <p className={styles.minorSubtitle}>{item.description}</p>
            </span>
          </a>
        ))}
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionLabel}>
          <h2>About</h2>
          <span className={styles.sectionRule} />
        </div>
        <div className={styles.bioBlock}>
          <p>
            I&rsquo;m a multidisciplinary founder working at the intersection
            of technology, experience, and art. These days, much of my work
            is about helping organizations make sense of AI&mdash;where it
            can genuinely change how people work, create new possibilities,
            and drive growth, and where it&rsquo;s better to leave things
            alone.
          </p>
          <p>
            I took a somewhat unconventional route here. My background spans
            startups, fintech, eCommerce, design, data, and political
            science. Moving between these worlds has shaped how I approach
            problems: understand the people and the system first, design the
            experience around them, then figure out what technology should
            do. In other words, I tend to see things as design problems
            before engineering problems.
          </p>
          <p>
            Away from the more visible work, I volunteer in career
            development, education, social empowerment, and elderly care.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>&copy; 2026 Amber Liang</span>
        <span>Designed &amp; built with care</span>
      </footer>
    </>
  );
}
