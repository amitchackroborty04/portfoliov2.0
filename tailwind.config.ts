import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",  

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "16px",
    //     sm: "20px",
    //     lg: "32px",
    //     xl: "40px",
    //   },
    //   screens: {
    //     "lg": "1140px",
    //   },
    // },

    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--background))",
        "popover-foreground": "hsl(var(--foreground))",
        destructive: "#ff0000",
      },
    },
  },

  plugins: [],
};

export default config;