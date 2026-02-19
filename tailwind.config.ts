import type { Config } from "tailwindcss";

/**
 * Tax4Broker — "Mercedes" Design System
 * ──────────────────────────────────────
 * Premium dark-mode SaaS palette for Israeli accountants.
 *
 * NOTE: With Tailwind v4, the active theme is defined via the
 * @theme directive in globals.css. This file serves as the
 * canonical design-system reference and can be imported by
 * tooling / Storybook / tests that still read JS config.
 */

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      /* ── Palette ─────────────────────────────── */
      colors: {
        // Primary — Deep Navy (Trust)
        navy: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Accent — Emerald (Money / Growth)
        emerald: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        // Surface — Clean Slate
        surface: {
          DEFAULT: "#F8FAFC",
          dark: "#1E293B",
          card: "#162032",
        },
      },
      /* ── Typography ──────────────────────────── */
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      /* ── Consistent Radii ────────────────────── */
      borderRadius: {
        btn: "0.625rem",   // 10px — all buttons
        card: "1rem",      // 16px — all cards
        pill: "9999px",    // full-round badges
      },
      /* ── Consistent Shadows ──────────────────── */
      boxShadow: {
        glow: "0 0 20px rgba(16, 185, 129, 0.35)",
        "glow-lg": "0 0 40px rgba(16, 185, 129, 0.45)",
        card: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
        "card-hover":
          "0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.08)",
      },
      /* ── Animation ───────────────────────────── */
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
