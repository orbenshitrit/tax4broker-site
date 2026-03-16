"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      dir="rtl"
      className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-edge bg-surface shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm leading-relaxed text-ink-secondary">
          אתר זה משתמש בעוגיות (Cookies) לצורך תפעול תקין של האתר ושיפור חוויית
          המשתמש, בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981. לפרטים נוספים ראו את{" "}
          <Link href="/terms" className="underline text-indigo-500 hover:text-indigo-400">
            תנאי השימוש ומדיניות הפרטיות
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={accept}
            className="rounded-lg bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            אישור
          </button>
          <button
            onClick={decline}
            className="rounded-lg border border-edge px-5 py-2 text-sm font-medium text-ink-secondary transition hover:bg-surface-subtle"
          >
            דחייה
          </button>
        </div>
      </div>
    </div>
  );
}
