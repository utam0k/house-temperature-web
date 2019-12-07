module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "source-map",
  target: "node",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }]
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] }
};
