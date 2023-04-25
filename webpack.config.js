/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool:
    process.env.NODE_ENV === "production" ? false : "eval-cheap-source-map", // https://webpack.js.org/configuration/devtool/#devtool
  output: {
    path: __dirname + "/build",
    filename: "index.js",
    libraryTarget: "umd",
    library: "tradetrustComponentUI",
    globalObject: "this",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-class-properties",
              "macros",
            ],
          },
        },
      },
      // https://github.com/storybookjs/storybook/issues/10179#issuecomment-602390300
      {
        test: /\.(stories|story)\.[tj]sx?$/,
        loader: require.resolve("@storybook/source-loader"),
        exclude: [/node_modules/],
        enforce: "pre",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff(2)?|png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/tailwind.js"),
          to: "[name][ext]",
        },
      ],
    }),
  ],
};
