import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "מס לברוקר זר | Tax4Broker - דוח מס ללקוחות Interactive Brokers",
  description:
    "דוח מס אוטומטי ללקוחות Interactive Brokers. חישוב רווח הון ריאלי לפי פסק דין מוזס, מותאם לדיווח למס הכנסה בישראל. מיועד לרואי חשבון ויועצי מס.",
  metadataBase: new URL("https://tax4broker.com"),
  openGraph: {
    title: "Tax4Broker — דוח מס ללקוחות Interactive Brokers",
    description:
      "דוח מס אוטומטי ללקוחות Interactive Brokers. חישוב רווח הון ריאלי לפי פסק דין מוזס, מותאם לדיווח למס הכנסה בישראל.",
    siteName: "Tax4Broker",
    locale: "he_IL",
    type: "website",
    url: "https://tax4broker.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax4Broker — דוח מס ללקוחות Interactive Brokers",
    description:
      "דוח מס אוטומטי ללקוחות Interactive Brokers. חישוב רווח הון ריאלי, מותאם לדיווח למס הכנסה בישראל.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={inter.variable}>
      <body className="bg-surface font-sans text-ink antialiased">
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
