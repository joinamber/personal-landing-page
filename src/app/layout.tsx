import type { Metadata } from "next";
import Rail from "@/components/Rail";
import "./globals.css";
import styles from "./layout.module.css";

const siteDescription =
  "Founder working at the intersection of AI, product, and policy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amberliang.xyz"),
  title: {
    default: "Amber Liang",
    template: "%s — Amber Liang",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amber Liang",
    description: siteDescription,
    url: "/",
    siteName: "Amber Liang",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Amber Liang",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.page}>
          <Rail />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
