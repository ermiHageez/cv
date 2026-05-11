import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ermiyas Eshetu | Full-Stack Engineer",
  description:
    "Full-Stack Engineer focused on scalable backend systems, enterprise applications, and modern web technologies. Building robust APIs, ERP workflows, and performant web solutions.",
  keywords: [
    "full-stack engineer",
    "backend developer",
    "software engineer",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Ethiopia",
  ],
  openGraph: {
    title: "Ermiyas Eshetu | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable backend systems and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-grid antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
