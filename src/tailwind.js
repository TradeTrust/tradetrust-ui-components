const plugin = require("tailwindcss/plugin"); //eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  theme: {
    // when in doubt, always put in `extend`
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
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
          default: "inherit",
        },
        black: {
          default: "#000000",
        },
        blue: {
          default: "#0099cc",
          300: "#f3f8fc",
          400: "#a6c1ee",
          800: "#001F29",
        },
        green: {
          default: "#00c04a",
          100: "#f5fbf7",
          400: "#68d391",
          600: "#008a35",
          900: "#001f29",
        },
        grey: {
          default: "#8f8f8f",
          100: "#fafafa",
          200: "#e5e5e5",
          300: "#dddddd",
          400: "#cfcfcf",
          700: "#5a5a5a",
          800: "#4f4f4f",
          900: "#212529",
        },
        greyblue: {
          default: "#c1c9d1",
          200: "#e2e8f0",
          700: "#a7afb7",
          900: "#343a40",
        },
        navy: {
          default: "#324353",
        },
        orange: {
          default: "#ff9933",
          300: "#fbd38d",
          600: "#ed8936",
        },
        pink: {
          default: "#fbc2eb",
        },
        red: {
          default: "#ff5268",
          100: "#fbeae9",
          200: "#f7d7d7",
          300: "#fc8686",
          400: "#e46767",
          900: "#8b0000",
        },
        teal: {
          default: "#00cbbc",
          300: "#e5f9f8",
        },
        white: {
          default: "#ffffff",
        },
        yellow: {
          300: "#fff48f",
          default: "#ffe600",
          600: "#ffbf00",
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
