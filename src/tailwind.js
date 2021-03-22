const plugin = require("tailwindcss/plugin"); //eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    // when in doubt, always put in `extend`
    extend: {
      minWidth: {
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
        blue: {
          300: "#f3f8fc",
          400: "#a6c1ee",
          500: "#0099cc",
          700: "#006080",
          800: "#001F29",
        },
        green: {
          100: "#f5fbf7",
          400: "#68d391",
          500: "#00c04a",
          600: "#008a35",
          900: "#001f29",
        },
        grey: {
          100: "#fafafa",
          200: "#e5e5e5",
          300: "#dddddd",
          400: "#cfcfcf",
          500: "#8f8f8f",
          700: "#5a5a5a",
          800: "#4f4f4f",
          900: "#212529",
        },
        greyblue: {
          200: "#e2e8f0",
          500: "#c1c9d1",
          700: "#a7afb7",
          900: "#343a40",
        },
        navy: {
          500: "#324353",
        },
        orange: {
          300: "#fbd38d",
          500: "#ff9933",
          600: "#ed8936",
        },
        pink: {
          300: "#fbc2eb",
        },
        red: {
          100: "#fbeae9",
          200: "#f7d7d7",
          300: "#fc8686",
          400: "#e46767",
          500: "#ff5268",
          900: "#8b0000",
        },
        teal: {
          300: "#26edde",
          500: "#00cbbc",
        },
        yellow: {
          300: "#fff48f",
          400: "#ffee4f",
          500: "#ffe600",
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
