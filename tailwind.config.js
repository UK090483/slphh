const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    debugScreens: {
      ignore: ["menu"],
    },
    fontFamily: {
      // sans: ["HamburgSans-Regular", "Arial", "sans-serif"],
      // header: ["HamburgSans-Bold", "Arial"],
      sans: ["Arial", "sans-serif"],
      header: ["Arial"],
    },
    fontSize: {
      sm: ["12px", "1.4em"],
      base: ["20px", "1.5em"],
      "base-mobile": ["16px", "1.5625em"],
      lg: ["20px", "1.4em"],
      xl: ["20px", "1.4em"],
      "2xl": ["22px", "1.1em"],
      "2xl-mobile": ["16px", "1.1em"],
      "3xl": ["30px", "1.1em"],
      "3xl-mobile": ["22px", "1.1em"],
      "4xl": ["38px", "1.1em"],
      "4xl-mobile": ["30px", "1.1em"],
      "5xl": ["48px", "1.1em"],
      "5xl-mobile": ["38px", "1.1em"],
    },

    extend: {
      gridTemplateColumns: {
        hero: " 1fr minmax(600px, 70vh)",
        heroSmall: " 1fr minmax(310px, 70vh)",
      },
      gridTemplateRows: {
        hero: "auto 0px",
        heroSmall: "40vh auto",
      },
      screens: {
        menu: "1166px",
      },
      height: {
        hero: "calc(80vh - 128px)",
        "hero-mobile": "calc(80vh - 128px)",
      },
      colors: {
        grey: {
          light: "#f4f4f1",
          DEFAULT: "#ebebeb",
          dark: "#009eeb",
        },
        black: "#003063",
        white: "#ffffff",
        primary: "#CA497C",
        secondary: "#B8D7D7",
        red: "#D22D30",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeInFast: "slideDown 0.25s ease-in forwards",
        fadeInMenuItemFast: "menuFade 0.25s ease-in forwards",
        slideInMobileMenu: "slideInMobileMenu 0.25s ease-in forwards",
        slideDown: "slideDown 0.25s ease-in forwards",
        slideUp: "slideUp 0.25s ease-in forwards",
        slideInRight: "slideInRight 0.5s ease-out forwards",
        slideInLeft: "slideInLeft 0.5s ease-out forwards",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        menuFade: {
          "0%": {
            opacity: 0,
            transform: " translateX(-50%) translateY(-100%)",
            zIndex: -100,
          },

          "99%": {
            zIndex: -100,
          },

          "100%": {
            zIndex: 20,
            opacity: 1,
            transform: "translateX(-50%) ",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInMobileMenu: {
          "0%": { transform: "translate3d(10vw,50vh,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-multi-column")(),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          fontWeight: theme("fontWeight.600"),

          color: theme("colors.black"),
          "&:hover": {
            backgroundColor: theme("colors.black"),
            color: theme("colors.white"),
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
