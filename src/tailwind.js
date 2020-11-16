const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
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
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      colors: {
        primary: {
          default: "#FF9220",
        },
        secondary: {
          default: "#E6F5FA",
        },
      },
    },
    colors: {
      brand: {
        blue: "#0099cc",
        orange: "#ff9933",
        navy: "#324353",
      },
      grey: {
        lightest: "#f5f5f5",
        lighter: "#e5e5e5",
        light: "#dddddd",
        default: "#8f8f8f",
        dark: "#5a5a5a",
        darker: "#4f4f4f",
      },
      greyblue: {
        default: "#c1c9d1",
        dark: "#a7afb7",
        darker: "#343a40",
      },
      blue: {
        lightest: "#f5f8fb",
        lighter: "#f3f8fc",
        light: "#a6c1ee",
        default: "#099de3",
        dark: "#001F29",
      },
      navy: {
        default: "#324353",
      },
      orange: {
        lighter: "#fbd38d",
        default: "#ffb152",
        dark: "#ed8936",
      },
      green: {
        lightest: "#f5fbf7",
        lighter: "#68d391",
        default: "#00c04a",
        dark: "#38a169",
        darker: "#001f29",
      },
      teal: {
        lighter: "#e5f9f8",
        default: "#00cbbc",
      },
      pink: {
        default: "#fbc2eb",
      },
      red: {
        lighter: "#fbeae9",
        default: "#ff5268",
        dark: "#8b0000",
      },
      white: {
        default: "#ffffff",
      },
      black: {
        light: "#212529",
        default: "#000000",
      },
      offblack: {
        default: "#212529",
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
