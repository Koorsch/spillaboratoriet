import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx,mdx,html,js,jsx}",
    "./app/**/*.{ts,tsx,mdx,html,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sarabun: ["sarabun", "sans-serif"],
      kobenhavn: ["kobenhavn", "serif"],
      kobenhavnPicto: ["kobenhavn-pictos", "sans-serif"],
    },
    fontSize: {
      sm: "var(--fs-sm)",
      base: "var(--fs-base)",
      md: "var(--fs-md)",
      lg: "var(--fs-lg)",
      xl: "var(--fs-xl)",
      xxl: "var(--fs-xxl)",
      xxxl: "var(--fs-xxxl)",
    },
    backgroundImage: {
      tilableSL: "url('/assets/sl_bg.webp')"
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      textLight: "var(--textLIGHT)",
      textDARK: "var(--textDARK)",
    },
    extend: {
      screens: {
        "xs": "420px",
        "md-plus": "820px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--input))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
    function ({addComponents}: any) {
      addComponents({
          ".sl-container__outer": {
              margin: "auto",
              backgroundColor: "orange",
              borderRadius: "1.1rem",
              border: "0.1rem solid black",
              boxShadow: "0 0.1rem 3px 0.1rem rgba(128, 128, 128, 0.418)",
            },
            ".sl-container__inner": {
              minWidth: "fit-content",
              maxWidth: "w-full",
              display: "flex",
              flexWrap: "wrap",
              margin: "0.2rem",
              padding: "1rem",
              border: "0.15rem solid gray",
              backgroundColor: "white",
              borderRadius: "1rem",
            },
      })
    }
  ],
} satisfies Config;

export default config;
