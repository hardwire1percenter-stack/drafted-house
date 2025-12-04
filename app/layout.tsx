import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Competence Restoration Act",
  description: "Official Ratification Interface. System v3.6. Secure Ledger Active.",
  openGraph: {
    title: "⚠️ The Competence Restoration Act",
    description: "Official Ratification Interface. System v3.6. Secure Ledger Active. Citizen Action Required.",
    siteName: "National Shadow Interface",
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
