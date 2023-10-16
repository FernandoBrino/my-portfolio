import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "sub-background": "var(--sub-background)",
        title: "var(--title)",
        text: "var(--text)",
        label: "var(--label)",
        "card-background": "var(--card-background)",
      },
    },
  },
  plugins: [],
};
export default config;
