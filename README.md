# DEPRECATED 🚨

[![Unmaintained](https://img.shields.io/badge/status-unmaintained-red)](https://shields.io/)

> This repository has been archived and is now in a read-only state. No further updates or maintenance will be provided.

# UI-Component Library For TradeTrust

## Install

```sh
npm i --save @tradetrust-tt/tradetrust-ui-components
```

## Development

In the project directory, you can run:

### `npm run start`

Runs the app in the storybook mode.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

> ignore running `npm run storybook` command directly for this repo, use `npm run start` instead

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

---

### Why?

This repository was created when repeated common styled components were being developed between 2 sites: tradetrust.io and creator.tradetrust.io.

Hence, the decision is to host any common ui components that are shared between the 2 sites here. This ensures DRY and design consistency between both sites.

### How is it determined what goes here?

As of now, any potential common components that are used between tradetrust.io and creator.tradetrust.io will be developed here. This repository is always on the work, do look out for any updates that happen along the way : )

### What's here?

Checkout the [documentation](https://ui.tradetrust.io) for the available components.

### Styleguide

Color palette [here](https://ui.tradetrust.io/?path=/docs/styleguide--colors).

### Styles management

- The components here are built with Tailwind css.
- Note that exported components are bare without styles.
- It is expected for external application(s) to setup their own tailwind config, using the exported tailwind config from `/build` folder. It may look something like this:
  ```
  const commonUiConfig = require("@govtechsg/tradetrust-ui-components/build/tailwind")
  ```
  Thereafter, do a deep merge with your local tailwind config if there is any.
- Do include `"./node_modules/@govtechsg/tradetrust-ui-components/src/**/*.tsx",` in tailwind config's purge content option, so that the classes will be retained after purged.
- Otherwise, can use the stylesheet in `/build/styles.css` directly. Be careful of any conflicting css class names that your application may have.

### Fonts management

We will not be providing the usage of Gilroy font. Please use alternatives.

However, for TradeTrust related applications, install by defining the following in `tailwind.css`.

```
@font-face {
  font-family: "Gilroy-Light";
  src: url('https://ui.tradetrust.io/static/fonts/GilroyLight/font.woff2') format('woff2'),
    url('https://ui.tradetrust.io/static/fonts/GilroyLight/font.woff') format('woff');
}
@font-face {
  font-family: "Gilroy-Medium";
  src: url('https://ui.tradetrust.io/static/fonts/GilroyMedium/font.woff2') format('woff2'),
    url('https://ui.tradetrust.io/static/fonts/GilroyMedium/font.woff') format('woff');
}
@font-face {
  font-family: "Gilroy-Bold";
  src: url('https://ui.tradetrust.io/static/fonts/GilroyBold/font.woff2') format('woff2'),
    url('https://ui.tradetrust.io/static/fonts/GilroyBold/font.woff') format('woff');
}
@font-face {
  font-family: "Gilroy-ExtraBold";
  src: url('https://ui.tradetrust.io/static/fonts/GilroyExtraBold/font.woff2') format('woff2'),
    url('https://ui.tradetrust.io/static/fonts/GilroyExtraBold/font.woff') format('woff');
}
```
