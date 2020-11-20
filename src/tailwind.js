const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    fontFamily: {
      sans: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      display: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      body: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    minWidth: {
      0: "0",
      xs: "18rem",
    },
    colors: {
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
      grey: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#dddddd",
        default: "#8f8f8f",
        700: "#5a5a5a",
        800: "#4f4f4f",
        900: "#212529",
      },
      greyblue: {
        default: "#c1c9d1",
      },
      green: {
        900: "#001f29",
      },
      teal: {
        lighter: "#e5f9f8",
        default: "#00cbbc",
      },
      red: {
        default: "#ff5268",
      },
      white: {
        default: "#ffffff",
      },
      black: {
        default: "#000000",
      },
    },
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
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
