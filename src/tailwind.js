const plugin = require("tailwindcss/plugin"); //eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.cloud.100", "currentColor"),
    }),
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      height: {
        120: "30rem",
        132: "33rem",
        160: "40rem",
      },
      maxWidth: {
        132: "33rem",
      },
      minHeight: {
        18: "4.5rem",
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
        inherit: {
          DEFAULT: "inherit",
        },
        cerulean: {
          DEFAULT: "#3B8CC5",
          50: "#F7F8FC",
          200: "#4BC3E9",
          300: "#1fabd8",
          500: "#0099cc",
        },
        tangerine: {
          DEFAULT: "#F57A29",
          300: "#fbd38d",
          600: "#ed8936",
        },
        lemon: {
          DEFAULT: "#FDC53F",
          700: "#E3A002",
          100: "#fff7e2",
        },
        rose: {
          DEFAULT: "#E62617",
          400: "#ff5268",
          100: "#ffeeed",
        },
        emerald: {
          DEFAULT: "#3AAF86",
          400: "#68d391",
          500: "#00c04a",
          700: "#008a35",
        },
        cloud: {
          100: "#E7EAEC",
          200: "#D1D5D9",
          300: "#B4BCC2",
          500: "#6E787F",
          900: "#454B50",
        },
        denim: {
          DEFAULT: "#324353",
          400: "#006080",
          900: "#001F29",
        },
        turquoise: {
          DEFAULT: "#00cbbc",
          300: "#26edde",
        },
      },
      boxShadow: {
        dropdown: `0px 4px 20px rgba(0, 0, 0, 0.15)`,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "even", "odd"],
      textColor: ["active"],
      borderRadius: ["active"],
      visibility: ["group-hover"],
      margin: ["last"],
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
