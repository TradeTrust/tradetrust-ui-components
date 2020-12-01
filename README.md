# UI-Component Library For TradeTrust

## Install

```sh
npm i --save @govtechsg/tradetrust-ui-component
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the storybook mode.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Components Available

- AddressBook
- AddressResolver
- NetworkBar
- Button
- Input
- Loader
- Overlay

Checkout storybook mode for more information.

## Styles

- Note that exported components are bare without styles.
- It is expected for external application(s) to setup their own tailwind config, using the exported tailwind config from `/build` folder. It may look something like this: `const commonUiConfig = require("@govtechsg/tradetrust-ui-components/build/tailwind")`, then merge it with your local config if there is any.
- Otherwise, can use the stylesheet in `/build/styles.css` directly.
