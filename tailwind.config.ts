import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "#05060B",
        surface: {
          DEFAULT: "#0B0E16",
          2: "#11141F",
          3: "#161A26",
        },
        foreground: "#EDEFF5",
        muted: "#8B93A7",
        border: "rgba(255,255,255,0.08)",
        primary: {
          DEFAULT: "#7C6CFF",
          50: "#F1EFFF",
          100: "#E3DFFF",
          300: "#B4A8FF",
          500: "#7C6CFF",
          600: "#6252E8",
          700: "#4A3DC0",
        },
        accent: {
          DEFAULT: "#22D3EE",
          soft: "rgba(34,211,238,0.12)",
        },
        success: {
          DEFAULT: "#34D399",
          soft: "rgba(52,211,153,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(60% 50% at 20% 15%, rgba(124,108,255,0.20) 0%, rgba(124,108,255,0) 60%), radial-gradient(50% 45% at 85% 20%, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0) 60%), radial-gradient(60% 50% at 50% 100%, rgba(124,108,255,0.10) 0%, rgba(124,108,255,0) 60%)",
        "gradient-primary": "linear-gradient(135deg, #7C6CFF 0%, #22D3EE 100%)",
        "gradient-text": "linear-gradient(135deg, #B4A8FF 0%, #22D3EE 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,108,255,0.15), 0 8px 40px -8px rgba(124,108,255,0.35)",
        card: "0 4px 24px -8px rgba(0,0,0,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease forwards",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
