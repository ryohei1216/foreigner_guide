const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "./src/__test__/**/*"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Foreigner Guide",
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
  //dev-web-server時の設定？
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    hot: true,
    port: 3000,
  },
};
