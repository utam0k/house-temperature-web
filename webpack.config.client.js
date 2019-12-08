const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  entry: "./src/client/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] }
};
