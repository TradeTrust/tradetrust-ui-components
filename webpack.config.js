module.exports = {
  entry: "./src/index.tsx",
  devtool: process.env.NODE_ENV === "production" ? false : "cheap-eval-source-map", // https://webpack.js.org/configuration/devtool/#devtool
  output: {
    path: __dirname + "/build",
    filename: "index.js",
    libraryTarget: "umd",
    library: "tradetrustComponentUI",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
};
