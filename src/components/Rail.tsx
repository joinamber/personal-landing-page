import Link from "next/link";
import styles from "./Rail.module.css";

export default function Rail() {
  return (
    <aside className={styles.rail}>
      <Link className={styles.mark} href="/">
        AL
      </Link>
      <Link className={styles.name} href="/">
        Amber&nbsp;Liang
      </Link>
      <p className={styles.tagline}>
        I&rsquo;m building Wildcard Research, a frontier studio — and I love a
        good challenge.
      </p>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href="/#work">
              <span className={styles.dot} />
              Work
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/#essays">
              <span className={styles.dot} />
              Essays
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/#community">
              <span className={styles.dot} />
              Community
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/#about">
              <span className={styles.dot} />
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.bio}>
        <p>
          Multidisciplinary founder working across technology, experience,
          and art. I help organizations rethink how work gets done with AI,
          guided by a simple bias: solve for people first, technology
          second.
        </p>
        <p>
          Based across APAC. Happiest with a hard, important problem in
          front of me.
        </p>
      </div>

      <div className={styles.contact}>
        <a
          className={styles.contactLink}
          href="mailto:amber@wildcardresearch.com"
        >
          amber@wildcardresearch.com
        </a>
        <a
          className={styles.contactLink}
          href="https://www.linkedin.com/in/amberliang/"
        >
          LinkedIn
        </a>
        <a
          className={styles.contactLink}
          href="https://medium.com/@amber-liang"
        >
          Medium
        </a>
        <a
          className={styles.contactLink}
          href="https://x.com/wildresearch"
        >
          X
        </a>
      </div>
    </aside>
  );
}
