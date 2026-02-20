"use client";

import { LayoutDashboard, Home, HelpCircle, User } from "lucide-react";

const APP_URL =
  "https://tax4broker-xwmxobsdsi7veqe2g4av3q.streamlit.app/";

/**
 * MobileDock — Floating bottom navigation bar (mobile only).
 *
 * Design: Semi-transparent glassmorphism bar with a raised
 * center CRM button styled as a half-circle "island".
 *
 * Only visible on screens < md (768px).
 */
export default function MobileDock() {
  return (
    <nav className="mobile-dock fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative mx-auto flex max-w-md items-end justify-around px-4 pb-2 pt-2">
        {/* Left items */}
        <DockItem href="/" icon={Home} label="ראשי" />
        <DockItem href="#features" icon={HelpCircle} label="יתרונות" />

        {/* Center — Raised CRM button */}
        <div className="relative -mt-6 flex flex-col items-center">
          {/* Semi-circle background */}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full shadow-[0_4px_20px_rgba(79,70,229,0.35)]"
            aria-label="כניסה למערכת CRM"
          >
            <LayoutDashboard className="h-6 w-6 text-white" />
          </a>
          <span className="mt-1 text-[10px] font-semibold text-indigo-500">
            CRM
          </span>
        </div>

        {/* Right items */}
        <DockItem href="#how" icon={User} label="איך זה עובד" />
        <DockItem href="#faq" icon={HelpCircle} label="שאלות" />
      </div>
    </nav>
  );
}

function DockItem({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-0.5 px-2 py-1 text-ink-tertiary transition-colors hover:text-indigo-500"
    >
      <Icon className="h-5 w-5" />
      <span className="text-[10px] font-medium">{label}</span>
    </a>
  );
}
