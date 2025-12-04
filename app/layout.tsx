import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // This line fixes the "missing image" issue by telling Facebook your full website address
  metadataBase: new URL('https://drafted-house.vercel.app'), 
  
  title: "The Competence Restoration Act",
  description: "Official Ratification Interface. System v3.6. Secure Ledger Active.",
  openGraph: {
    title: "⚠️ The Competence Restoration Act",
    description: "We Love You BUT, Time For An Update. Participate in the v3.6 Citizen Ratification.",
    siteName: "National Shadow Interface",
    locale: 'en_US',
    type: 'website',
    // Making sure this points to your PNG file
    images: ['/preview.png'], 
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
