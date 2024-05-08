const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  plugins: [addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: {
        50: "#E1F4FF",
        100: "#B3D3F6",
        200: "#80D0FE",
        300: "#3EB8FE",
        400: "#01A1FE",
        500: "#0177BD",
        600: "#016198",
        700: "#014770",
        800: "#00304C",
        900: "#001724",
        950: "#000D14",
      },
      secondary: {
        50: "#E7E7EE",
        100: "#CFD0DE",
        200: "#9C9EBA",
        300: "#6C6F98",
        400: "#494B69",
        500: "#272838",
        600: "#1F202D",
        700: "#171821",
        800: "#0F0F15",
        900: "#08090C",
        950: "#040406",
      },
      white: "#fbfef9",
      gray: {
        50: "#FAFAFA",
        100: "#F2F2F2",
        200: "#E0E0E0",
        300: "#CFCFCF",
        400: "#BDBDBD",
        500: "#AAAAAA",
        600: "#878787",
        700: "#666666",
        800: "#454545",
        900: "#212121",
        950: "#121212",
      },
      accent: {
        50: "#E9F3FB",
        100: "#C6E0F6",
        200: "#84BDEB",
        300: "#479CE1",
        400: "#1F76BD",
        500: "#144C7B",
        600: "#103C60",
        700: "#0C2E4B",
        800: "#081E30",
        900: "#04101A",
        950: "#02080D",
      },
      hackclub: {
        primary: "#fb3e3c",
        "primary-content": "#ffffff",
        "primary-dark": "#fa0d0a",
        "primary-light": "#fc6f6e",
        "side": "#FFF7ED",

        secondary: "#99fb3c",
        "secondary-content": "#1b3701",
        "secondary-dark": "#7ffa0a",
        "secondary-light": "#b3fc6e",

        background: "#f1efef",
        foreground: "#fbfbfb",
        border: "#e2dddd",
      }
    },
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        orbit: {
          "0%": {
              transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
              transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
      },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "skew-scroll": {
          "0%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
          },
        },
      },
     
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        border: "border 4s ease infinite",
        "skew-scroll": "skew-scroll 20s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  console.log(allColors);
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
