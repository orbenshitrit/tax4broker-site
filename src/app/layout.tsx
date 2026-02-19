import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "מס לברוקר זר | Tax4Broker - דוח מס ללקוחות Interactive Brokers",
  description:
    "דוח מס אוטומטי ללקוחות Interactive Brokers. חישוב רווח הון ריאלי לפי פסק דין מוזס, מותאם לדיווח למס הכנסה בישראל. מיועד לרואי חשבון ויועצי מס.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={inter.variable}>
      <body className="bg-navy-900 font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
