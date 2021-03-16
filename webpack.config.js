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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
};
