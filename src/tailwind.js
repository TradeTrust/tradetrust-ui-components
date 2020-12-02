const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    layers: ["components", "utilities"],
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
  },
  theme: {
    // when in doubt, always put in `extend`
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    fontFamily: {
      sans: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      display: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      body: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      minWidth: {
        0: "0",
        xs: "18rem",
      },
      opacity: {
        0: "0",
        10: ".1",
        20: ".2",
        30: ".3",
        40: ".4",
        50: ".5",
        60: ".6",
        70: ".7",
        80: ".8",
        90: ".9",
        100: "1",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      transitionDuration: {
        0: "0ms",
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      colors: {
        inherit: {
          default: "inherit", // why need this mmm
        },
        blue: {
          default: "#0099cc",
        },
        navy: {
          default: "#324353",
        },
        orange: {
          default: "#ff9933",
          600: "#ed8936",
        },
        green: {
          default: "#00c04a",
          600: "#008a35",
          900: "#001f29",
        },
        red: {
          default: "#ff5268",
          600: "#ff213d",
        },
        teal: {
          300: "#e5f9f8",
          default: "#00cbbc",
        },
        greyblue: {
          default: "#c1c9d1",
        },
        grey: {
          100: "#fafafa",
          200: "#e5e5e5",
          300: "#dddddd",
          400: "#cfcfcf",
          default: "#8f8f8f",
          700: "#5a5a5a",
          800: "#4f4f4f",
          900: "#212529",
        },
        white: {
          default: "#ffffff",
        },
        black: {
          default: "#000000",
        },
      },
    },
  },
  variants: {
    // https://v1.tailwindcss.com/docs/configuring-variants#ordering-variants
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontWeight: config("theme.fontWeight.bold") },
        h2: { fontWeight: config("theme.fontWeight.bold") },
        h3: { fontWeight: config("theme.fontWeight.bold") },
        h4: { fontWeight: config("theme.fontWeight.bold") },
        h5: { fontWeight: config("theme.fontWeight.bold") },
        h6: { fontWeight: config("theme.fontWeight.bold") },
      });
    }),
  ],
};
