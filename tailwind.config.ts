import type { Config } from "tailwindcss";

/**
 * Tax4Broker — "Seato × Apple" Design System
 * ────────────────────────────────────────────
 * Premium light-mode fintech aesthetic for Israeli accountants.
 * Pure whites, jet blacks, muted indigo accent.
 * Inspired by seato.ai + Apple minimalism.
 */

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      /* ── Palette ─────────────────────────────── */
      colors: {
        // Backgrounds
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#FAFAFA",
          muted: "#F5F5F7",
          card: "#FFFFFF",
        },
        // Text
        ink: {
          DEFAULT: "#1D1D1F",
          secondary: "#424245",
          tertiary: "#86868B",
          quaternary: "#AEAEB2",
        },
        // Accent — Deep Indigo (Professional)
        indigo: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#4F46E5",
          600: "#4338CA",
          700: "#3730A3",
        },
        // Borders
        edge: {
          DEFAULT: "#E5E7EB",
          subtle: "#F3F4F6",
          strong: "#D1D5DB",
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
      letterSpacing: {
        "apple-tight": "-0.022em",
        "apple-display": "-0.032em",
      },
      /* ── Consistent Radii ────────────────────── */
      borderRadius: {
        btn: "0.75rem",    // 12px — buttons
        card: "1.5rem",    // 24px — cards (Seato-style)
        bento: "2rem",     // 32px — large bento cards
        pill: "9999px",
      },
      /* ── Subtle Shadows ──────────────────────── */
      boxShadow: {
        "soft": "0 1px 2px rgba(0, 0, 0, 0.04)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.08)",
        "dock": "0 -4px 30px rgba(0, 0, 0, 0.08)",
        "btn": "0 1px 2px rgba(79, 70, 229, 0.15)",
        "btn-hover": "0 4px 16px rgba(79, 70, 229, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
