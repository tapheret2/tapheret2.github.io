import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phạm Tiến Phát — Data Engineer Portfolio",
  description:
    "Phạm Tiến Phát — Data Engineering student in Ho Chi Minh City, Vietnam. Building scalable data pipelines, ETL systems, and ML models. Open to Data Engineering Internships.",
  keywords: [
    "Data Engineering",
    "ETL Pipeline",
    "Python",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Ho Chi Minh City",
    "Vietnam",
    "Intern",
    "Phạm Tiến Phát",
    "tienphat",
    "tienphat.me",
    "Pham Tien Phat",
  ],
  authors: [{ name: "Phạm Tiến Phát" }],
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Phạm Tiến Phát — Data Engineer Portfolio",
    description:
      "Building scalable data systems. Open to Data Engineering Internships.",
    url: "https://tienphat.me",
    type: "website",
    siteName: "tienphat.me",
  },
  twitter: {
    card: "summary",
    title: "Phạm Tiến Phát — Data Engineer Portfolio",
    description:
      "Data Engineering student building scalable pipelines, ETL systems, and ML models.",
  },
  alternates: {
    canonical: "https://tienphat.me",
  },
  metadataBase: new URL("https://tienphat.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
