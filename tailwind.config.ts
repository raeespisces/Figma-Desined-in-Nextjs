import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      inset: {
        '244': '244px',
      },
      fontFamily: {
        sans: [
          "YourSansFont",
          "ui-sans-serif",
          "system-ui",
          "Inter var",
          "sans-serif",
        ],
        serif: ["YourSerifFont", "ui-serif", "Georgia"],
        mono: ["YourMonoFont", "ui-monospace", "SFMono-Regular"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
