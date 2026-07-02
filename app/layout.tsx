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
  title: "Ermiyas Eshetu | Backend Software Engineer | AI Engineer | ERP Developer",
  description:
    "Backend Software Engineer, AI Engineer, and ERP Developer from Ethiopia. Building scalable backend systems, AI-powered applications, and enterprise ERP solutions.",
  keywords: [
    "backend engineer",
    "AI engineer",
    "ERP developer",
    "software engineer",
    "Python",
    "Node.js",
    "Java",
    "LangChain",
    "RAG",
    "PostgreSQL",
    "Ethiopia",
    "Addis Ababa",
  ],
  openGraph: {
    title: "Ermiyas Eshetu | Backend Software Engineer | AI Engineer | ERP Developer",
    description:
      "Building scalable backend systems, AI-powered applications, and enterprise ERP solutions.",
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
