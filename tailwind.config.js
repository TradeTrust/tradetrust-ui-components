/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

// https://tailwindcss.com/docs/configuration/#referencing-in-javascript
// https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory

const commonUiConfig = require("./src/tailwind.js"); // workaround for react to resolve tailwind config, by accessing inside of src directory
const _ = require("lodash");

localConfig = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
      display: ["Red Hat Display", "sans-serif"],
      body: ["Red Hat Display", "sans-serif"],
      headings: ["Ubuntu", "sans-serif"],
    },
  },
};

const config = _.merge(commonUiConfig, localConfig); // deep merge

module.exports = config;
