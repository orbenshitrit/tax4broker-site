"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import {
  FileSpreadsheet,
  Calculator,
  LayoutDashboard,
  ArrowLeft,
  CheckCircle2,
  Users,
  Shield,
  Clock,
  BarChart3,
  TrendingUp,
  PieChart,
  Upload,
  FileCheck,
  ArrowDown,
} from "lucide-react";
import MobileDock from "@/components/MobileDock";

/* ═══════════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════════ */
const APP_URL =
  "https://tax4broker-xwmxobsdsi7veqe2g4av3q.streamlit.app/";

/* ═══════════════════════════════════════════════
   Framer Motion — Subtle fade-in only
   ═══════════════════════════════════════════════ */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Fade({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   Navbar — Light glassmorphism, Apple clean
   ═══════════════════════════════════════════════ */
function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500">
            <FileSpreadsheet className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-[17px] font-semibold tracking-[-0.022em] text-ink">
            Tax4Broker
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "#features", label: "יתרונות" },
            { href: "#how", label: "איך זה עובד" },
            { href: "#faq", label: "שאלות נפוצות" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink-tertiary transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden items-center gap-2 px-5 py-2.5 text-[13px] font-semibold md:inline-flex"
        >
          כניסה למערכת
          <ArrowLeft className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   Hero — Apple-style centered, minimal
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-36">
      <div className="relative mx-auto max-w-4xl text-center">
        <Fade>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-surface-subtle px-4 py-1.5 text-[12px] font-medium text-ink-tertiary">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            לרואי חשבון ויועצי מס בישראל
          </div>
        </Fade>

        <Fade>
          <h1 className="text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.032em] text-ink sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem]">
            דוח מס ללקוחות
            <br />
            <span className="text-indigo-500">Interactive Brokers</span>
            <br />
            ב-3 דקות
          </h1>
        </Fade>

        <Fade>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
            חישוב רווח הון ריאלי לפי פסק דין מוזס, ריכוז דיבידנדים ומס שנוכה
            במקור — דוח מוכן לדיווח למס הכנסה. אוטומטי לגמרי.
          </p>
        </Fade>

        <Fade>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] font-semibold"
            >
              <Calculator className="h-4.5 w-4.5" />
              התחל לחשב עכשיו
            </a>
            <a
              href="#features"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold"
            >
              גלה עוד
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Fade>

        {/* Trust row */}
        <Fade>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[13px] text-ink-tertiary">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-indigo-400" />
              מותאם לחוק הישראלי
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-indigo-400" />
              דוח מוכן ב-3 דקות
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-indigo-400" />
              לרואי חשבון ומשרדים
            </span>
          </div>
        </Fade>
      </div>

      {/* Dashboard Visual — below heading */}
      <Fade className="mx-auto mt-16 max-w-5xl">
        <DashboardVisual />
      </Fade>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Dashboard Visual — Light, clean placeholder
   ═══════════════════════════════════════════════ */
function DashboardVisual() {
  return (
    <div className="dashboard-placeholder p-1 shadow-[var(--shadow-card)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 rounded-t-[calc(var(--radius-card)-4px)] border-b border-edge bg-surface-muted px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="mr-4 text-xs text-ink-quaternary">Tax4Broker — לוח בקרה</span>
      </div>
      {/* Dashboard body */}
      <div className="space-y-4 bg-white p-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "סה״כ מכירות", value: "₪2,847,320", icon: BarChart3 },
            { label: "רווח הון ריאלי", value: "₪412,580", icon: TrendingUp },
            { label: "לקוחות פעילים", value: "34", icon: PieChart },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-edge bg-surface-subtle p-3"
            >
              <div className="mb-1 flex items-center gap-1.5">
                <stat.icon className="h-3.5 w-3.5 text-indigo-500" />
                <span className="text-[10px] text-ink-tertiary">{stat.label}</span>
              </div>
              <span className="text-sm font-semibold text-ink">{stat.value}</span>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div className="flex h-32 items-end gap-1.5 rounded-xl border border-edge bg-surface-subtle p-4">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-indigo-300"
              style={{ height: `${h}%`, opacity: 0.7 + (h / 100) * 0.3 }}
            />
          ))}
        </div>
        {/* Table placeholder */}
        <div className="space-y-0 rounded-xl border border-edge">
          {[
            { ticker: "AAPL", action: "מכירה", amount: "+₪12,340" },
            { ticker: "MSFT", action: "מכירה", amount: "+₪8,920" },
            { ticker: "TSLA", action: "קנייה", amount: "₪45,000" },
          ].map((row, i) => (
            <div
              key={row.ticker}
              className={`flex items-center justify-between px-4 py-3 text-xs ${
                i !== 2 ? "border-b border-edge" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-ink">{row.ticker}</span>
                <span className="text-ink-tertiary">{row.action}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-ink">{row.amount}</span>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
                  הושלם
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Bento Feature Grid — Seato-style layout
   ═══════════════════════════════════════════════ */
const features = [
  {
    icon: FileSpreadsheet,
    title: "ייבוא אוטומטי מהברוקר",
    description:
      "העלאת דוחות Interactive Brokers למערכת בלחיצת כפתור. ניתוח עסקאות, דיבידנדים, המרות מט״ח — הכל אוטומטי.",
    bullets: [
      "תמיכה ב-Interactive Brokers ו-Interactive Israel",
      "עיבוד אלפי עסקאות בשניות",
      "זיהוי אוטומטי של פיצולים ומיזוגים",
    ],
    span: "md:col-span-2",
  },
  {
    icon: Calculator,
    title: "אופטימיזציית מס ישראלית",
    description:
      "חישוב רווח הון ריאלי לפי פסק דין מוזס, התאמת שערי חליפין, ודוח מותאם לנספח ג׳.",
    bullets: [
      "חישוב לפי פסק דין מוזס",
      "מותאם לנספח ג׳ ולמס הכנסה",
      "מס שנוכה במקור על דיבידנדים",
    ],
    span: "md:col-span-1",
  },
  {
    icon: LayoutDashboard,
    title: "לוח בקרה לרואי חשבון",
    description:
      "מערכת CRM מלאה לניהול לקוחות, יצירת דוחות, ומעקב אחר תהליכי עבודה.",
    bullets: [
      "ניהול כל הלקוחות ממקום אחד",
      "מדריך מובנה לשליחה ללקוח",
      "תהליך עבודה אחיד וברור",
    ],
    span: "md:col-span-1",
  },
  {
    icon: Shield,
    title: "התאמה מלאה לחוק הישראלי",
    description:
      "הדוח מותאם לדרישות נספח ג׳, לדיווח השנתי למס הכנסה, ולפסק דין מוזס.",
    bullets: [
      "תואם נספח ג׳",
      "חישוב ריאלי לפי מוזס",
      "מוכן להגשה למס הכנסה",
    ],
    span: "md:col-span-2",
  },
];

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="bg-surface-subtle px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Fade>
          <div className="mb-16 text-center">
            <h2 className="text-[2rem] font-semibold tracking-[-0.032em] text-ink sm:text-[2.5rem] lg:text-[3rem]">
              הכל כדי שתתמקדו בלקוח
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-ink-secondary">
              חיסכון של שעות עבודה לכל לקוח, ללא חישובים ידניים.
            </p>
          </div>
        </Fade>

        {/* Bento Grid — 3 cols */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-4 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeIn}
              className={`bento p-8 ${f.span}`}
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-50 p-3.5">
                <f.icon className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-[-0.022em] text-ink">
                {f.title}
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-secondary">
                {f.description}
              </p>
              <ul className="space-y-2.5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[14px] text-ink-secondary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   How It Works — 3 clean steps
   ═══════════════════════════════════════════════ */
const steps = [
  {
    num: "01",
    icon: ArrowDown,
    title: "הלקוח מוריד דוחות",
    desc: "הלקוח מוריד שני דוחות בלבד מ-Interactive Brokers — דוח עסקאות ודוח דיבידנדים.",
  },
  {
    num: "02",
    icon: Upload,
    title: "העלאה למערכת",
    desc: "רואה החשבון מעלה את הקבצים למערכת ה-CRM בלחיצת כפתור. הכל אוטומטי.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "דוח מוכן",
    desc: "דוח מס סופי — סיכום עסקאות, רווחי הון, דיבידנדים — מוכן לדיווח למס הכנסה.",
  },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" className="bg-surface px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <Fade>
          <div className="mb-16 text-center">
            <h2 className="text-[2rem] font-semibold tracking-[-0.032em] text-ink sm:text-[2.5rem] lg:text-[3rem]">
              תהליך פשוט. תוצאה מדויקת.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-ink-secondary">
              שלושה שלבים מההורדה ועד הדוח הסופי.
            </p>
          </div>
        </Fade>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeIn}
              className="card p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
                <s.icon className="h-6 w-6 text-indigo-500" />
              </div>
              <span className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-indigo-500">
                שלב {s.num}
              </span>
              <h3 className="mb-2 text-base font-semibold text-ink">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-secondary">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
const faqs = [
  {
    q: "האם הדוח מתאים לנספח ג׳?",
    a: "כן. הדוח מותאם לדרישות נספח ג׳ ולדיווח השנתי למס הכנסה בישראל.",
  },
  {
    q: "האם החישוב כולל רווח הון ריאלי לפי חוק מוזס?",
    a: "כן. המערכת מחשבת רווח הון ריאלי בהתאם לפסק דין מוזס, כולל התאמת שערי חליפין ומדד.",
  },
  {
    q: "האם המערכת תומכת ב-Interactive Israel?",
    a: "כן. המערכת תומכת הן ב-Interactive Brokers והן ב-Interactive Israel.",
  },
  {
    q: "האם השירות מיועד רק לרואי חשבון?",
    a: "בעיקר כן, אך גם לקוחות פרטיים שרוצים שירות באמצעות אחד מרואי החשבון שעובדים עם המערכת שלנו.",
  },
];

function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-surface-subtle px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Fade>
          <h2 className="mb-14 text-center text-[2rem] font-semibold tracking-[-0.032em] text-ink sm:text-[2.5rem]">
            שאלות נפוצות
          </h2>
        </Fade>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeIn} className="card p-6">
              <h3 className="mb-2 font-semibold text-ink">{f.q}</h3>
              <p className="text-[14px] leading-relaxed text-ink-secondary">
                {f.a}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   The Bridge — CTA banner (light, clean)
   ═══════════════════════════════════════════════ */
function Bridge() {
  return (
    <section className="bg-surface px-4 py-24 text-center sm:px-6 sm:py-32">
      <Fade className="mx-auto max-w-3xl">
        <h2 className="text-[2rem] font-semibold tracking-[-0.032em] text-ink sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
          מוכנים לעבד את
          <br />
          הלקוח הראשון?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] text-ink-secondary">
          הפיקו דוח מס ללקוחות Interactive Brokers בתוך 3 דקות.
          <br className="hidden sm:block" />
          בלי אקסלים. בלי חישובים ידניים. בלי כאב ראש.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-10 inline-flex items-center gap-3 px-10 py-4 text-[17px] font-semibold"
        >
          <Calculator className="h-5 w-5" />
          התחל עכשיו — בחינם
        </a>
      </Fade>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-edge bg-surface-subtle px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-[13px] text-ink-tertiary sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500">
            <FileSpreadsheet className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="font-semibold text-ink">Tax4Broker</span>
        </div>
        <p>© {new Date().getFullYear()} Tax4Broker. כל הזכויות שמורות.</p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-500 transition-colors hover:text-indigo-600"
        >
          כניסה למערכת
        </a>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   Page — compose all sections
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-dock">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Bridge />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
