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
      transitionProperty: {
        height: "max-height",
      },
      colors: {
        // START - redesign
        brand: {
          100: "#f7f8fc",
          300: "#1fabd8",
          500: "#3b8cc5",
        },
        primary: {
          100: "#F7F8FC",
          300: "#4BC3E9",
          DEFAULT: "#3B8CC5",
        },
        secondary: {
          DEFAULT: "#F57A29",
        },
        tertiary: {
          DEFAULT: "#FDC53F",
          700: "#E3A002",
        },
        error: {
          DEFAULT: "#E62617",
        },
        success: {
          DEFAULT: "#3AAF86",
        },
        grey: {
          100: "#E7EAEC",
          200: "#D1D5D9",
          300: "#B4BCC2",
          500: "#6E787F",
          900: "#454B50",
        },
        // END - redesign
        inherit: {
          DEFAULT: "inherit",
        },
        blue: {
          DEFAULT: "#0099cc",
          300: "#f3f8fc",
          400: "#a6c1ee",
          700: "#006080",
          800: "#001F29",
        },
        green: {
          DEFAULT: "#00c04a",
          100: "#f5fbf7",
          400: "#68d391",
          600: "#008a35",
          900: "#001f29",
        },
        gray: {
          DEFAULT: "#8f8f8f",
          100: "#fafafa",
          200: "#e5e5e5",
          300: "#dddddd",
          400: "#cfcfcf",
          700: "#5a5a5a",
          800: "#4f4f4f",
          900: "#212529",
        },
        grayblue: {
          DEFAULT: "#c1c9d1",
          200: "#e2e8f0",
          700: "#a7afb7",
          800: "#6e787f",
          900: "#343a40",
        },
        navy: {
          DEFAULT: "#324353",
        },
        orange: {
          DEFAULT: "#ff9933",
          300: "#fbd38d",
          600: "#ed8936",
        },
        pink: {
          DEFAULT: "#fbc2eb",
        },
        red: {
          DEFAULT: "#ff5268",
          100: "#fbeae9",
          200: "#f7d7d7",
          300: "#fc8686",
          400: "#e46767",
          900: "#8b0000",
        },
        teal: {
          DEFAULT: "#00cbbc",
          300: "#26edde",
        },
        yellow: {
          DEFAULT: "#ffe600",
          300: "#fff48f",
          400: "#ffee4f",
          600: "#ffbf00",
        },
      },
      boxShadow: {
        dropdown: `0px 4px 20px rgba(0, 0, 0, 0.15)`,
      },
    },
  },
  variants: {
    // https://v1.tailwindcss.com/docs/configuring-variants#ordering-variants
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    extend: {
      fontWeight: ["hover", "focus"],
    },
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
