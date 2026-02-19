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
} from "lucide-react";

/* ═══════════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════════ */
const APP_URL =
  "https://tax4broker-xwmxobsdsi7veqe2g4av3q.streamlit.app/";

/* ═══════════════════════════════════════════════
   Framer Motion — Fade-in-up on scroll
   ═══════════════════════════════════════════════ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function FadeUp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   Navbar — Glassmorphism, sticky
   ═══════════════════════════════════════════════ */
function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <FileSpreadsheet className="h-7 w-7 text-emerald-400" />
          <span className="text-lg font-bold tracking-tight text-white">
            מס לברוקר זר
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-navy-400 transition-colors duration-200 hover:text-white"
          >
            יתרונות
          </a>
          <a
            href="#how"
            className="text-sm text-navy-400 transition-colors duration-200 hover:text-white"
          >
            איך זה עובד
          </a>
          <a
            href="#faq"
            className="text-sm text-navy-400 transition-colors duration-200 hover:text-white"
          >
            שאלות נפוצות
          </a>
        </div>

        {/* CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white"
        >
          כניסה למערכת
          <ArrowLeft className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   Hero — Dark gradient + dashboard visual
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-36">
      {/* Radial gradient accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to left, #94A3B8 1px, transparent 1px), linear-gradient(to bottom, #94A3B8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <FadeUp>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              לרואי חשבון ויועצי מס
            </p>

            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              דוח מס ללקוחות
              <br />
              <span className="bg-gradient-to-l from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Interactive Brokers
              </span>
              <br />
              כבר לא סיפור
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-400 sm:text-lg">
              דוח מס אוטומטי הכולל חישוב רווח הון ריאלי לפי פסק דין מוזס, ריכוז
              דיבידנדים ומס שנוכה במקור — מוכן לדיווח למס הכנסה ב-3 דקות בלבד.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-btn)] bg-emerald-500 px-8 py-4 text-base font-bold text-white"
              >
                <Calculator className="h-5 w-5" />
                התחל לחשב עכשיו
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-navy-600 px-8 py-4 text-base font-semibold text-navy-300 transition-all duration-300 hover:border-navy-400 hover:text-white"
              >
                גלה איך זה עובד
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-navy-400 sm:gap-8 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-500" />
                מותאם לחוק הישראלי
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-500" />
                דוח מוכן ב-3 דקות
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-emerald-500" />
                לרואי חשבון ומשרדים
              </span>
            </div>
          </FadeUp>

          {/* Dashboard placeholder */}
          <FadeUp className="hidden lg:block">
            <DashboardVisual />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Dashboard Visual — Premium screenshot placeholder
   ═══════════════════════════════════════════════ */
function DashboardVisual() {
  return (
    <div className="dashboard-placeholder p-1">
      {/* Window chrome */}
      <div className="flex items-center gap-2 rounded-t-[calc(var(--radius-card)-4px)] border-b border-navy-700 bg-navy-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/60" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
        <span className="mr-4 text-xs text-navy-500">Tax4Broker Dashboard</span>
      </div>
      {/* Dashboard body */}
      <div className="space-y-4 p-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "סה״כ מכירות", value: "₪2,847,320", icon: BarChart3 },
            { label: "רווח הון ריאלי", value: "₪412,580", icon: TrendingUp },
            { label: "לקוחות פעילים", value: "34", icon: PieChart },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-navy-700 bg-navy-800/60 p-3"
            >
              <div className="mb-1 flex items-center gap-1.5">
                <stat.icon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[10px] text-navy-400">{stat.label}</span>
              </div>
              <span className="text-sm font-bold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div className="flex h-36 items-end gap-1 rounded-lg border border-navy-700 bg-navy-800/40 p-4">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-emerald-600/80 to-emerald-400/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        {/* Table placeholder */}
        <div className="space-y-2 rounded-lg border border-navy-700 bg-navy-800/40 p-4">
          {["AAPL — Sell — +₪12,340", "MSFT — Sell — +₪8,920", "TSLA — Buy — ₪45,000"].map(
            (row) => (
              <div
                key={row}
                className="flex items-center justify-between border-b border-navy-700/50 pb-2 text-xs last:border-0 last:pb-0"
              >
                <span className="text-navy-300">{row}</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-400">
                  הושלם
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Feature Grid — 3 columns, dark cards
   ═══════════════════════════════════════════════ */
const features = [
  {
    icon: FileSpreadsheet,
    title: "ייבוא אוטומטי מהברוקר",
    description:
      "העלאת דוחות Interactive Brokers למערכת בלחיצת כפתור. ניתוח עסקאות, דיבידנדים, המרות מט״ח ופעולות נוספות — הכל באופן אוטומטי.",
    bullets: [
      "תמיכה ב-Interactive Brokers ו-Interactive Israel",
      "עיבוד אלפי עסקאות בשניות",
      "זיהוי אוטומטי של פיצולים ומיזוגים",
    ],
  },
  {
    icon: Calculator,
    title: "אופטימיזציית מס ישראלית",
    description:
      "חישוב רווח הון ריאלי לפי פסק דין מוזס, התאמת שערי חליפין, ודוח מותאם לנספח ג׳ ולדיווח השנתי למס הכנסה.",
    bullets: [
      "חישוב לפי פסק דין מוזס",
      "מותאם לנספח ג׳ ולמס הכנסה",
      "מס שנוכה במקור על דיבידנדים",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "לוח בקרה לרואי חשבון",
    description:
      "מערכת CRM מלאה לניהול לקוחות, יצירת דוחות, ומעקב אחר תהליכי עבודה. תהליך אחיד, יעיל ובר-שליטה לכל לקוח.",
    bullets: [
      "ניהול כל הלקוחות ממקום אחד",
      "מדריך מובנה לשליחה ללקוח",
      "תהליך עבודה אחיד וברור",
    ],
  },
];

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      className="bg-navy-950 px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              למה רואי חשבון בוחרים במס לברוקר זר
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy-400">
              חיסכון של שעות עבודה לכל לקוח, ללא חישובים ידניים, עם פתרון ייעודי
              לברוקר זר.
            </p>
          </div>
        </FadeUp>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="card-surface p-8"
            >
              <div className="mb-5 inline-flex rounded-xl bg-emerald-500/10 p-3">
                <f.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{f.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-navy-400">
                {f.description}
              </p>
              <ul className="space-y-2.5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-navy-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
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
   How It Works — 3-step process
   ═══════════════════════════════════════════════ */
const steps = [
  {
    num: "01",
    title: "הלקוח מוריד דוחות מ-Interactive Brokers",
    desc: "הלקוח מוריד שני דוחות בלבד — דוח עסקאות ודוח דיבידנדים — בהתאם למדריך שנשלח אליו מהמערכת.",
  },
  {
    num: "02",
    title: "העלאת הדוחות למערכת",
    desc: "רואה החשבון מעלה את הקבצים למערכת ה-CRM בלחיצת כפתור. המערכת מעבדת את הנתונים באופן אוטומטי.",
  },
  {
    num: "03",
    title: "קבלת דוח מס מוכן",
    desc: "דוח מס סופי הכולל סיכום עסקאות, רווחי הון ריאליים, דיבידנדים ומס שנוכה במקור — מוכן לדיווח למס הכנסה.",
  },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how" className="bg-navy-900 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              איך זה עובד?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-400">
              תהליך פשוט ב-3 שלבים — מההורדה ועד הדוח הסופי.
            </p>
          </div>
        </FadeUp>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div key={s.num} variants={fadeUp} className="text-center">
              <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-xl font-bold text-emerald-400 ring-1 ring-emerald-500/30">
                {s.num}
              </span>
              <h3 className="mb-2 text-base font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-navy-400">{s.desc}</p>
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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="bg-navy-950 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            שאלות נפוצות
          </h2>
        </FadeUp>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-5"
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeUp} className="card-surface p-6">
              <h3 className="mb-2 font-bold text-white">{f.q}</h3>
              <p className="text-sm leading-relaxed text-navy-400">{f.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   The Bridge — CTA banner
   ═══════════════════════════════════════════════ */
function Bridge() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-4 py-24 text-center sm:px-6 sm:py-32">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
      />

      <FadeUp className="relative mx-auto max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          מוכנים לעבד את הלקוח הראשון?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-navy-400 sm:text-lg">
          הפיקו דוח מס ללקוחות Interactive Brokers בתוך 3 דקות. בלי אקסלים, בלי
          חישובים ידניים, בלי כאב ראש.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-10 inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-12 py-6 text-lg font-extrabold text-white sm:text-xl"
        >
          <Calculator className="h-6 w-6" />
          התחל עכשיו — בחינם
        </a>
      </FadeUp>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-950 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-navy-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
          <span className="font-semibold text-white">מס לברוקר זר</span>
        </div>
        <p>© {new Date().getFullYear()} Tax4Broker. כל הזכויות שמורות.</p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
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
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Bridge />
      </main>
      <Footer />
    </>
  );
}
