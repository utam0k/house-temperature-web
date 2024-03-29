module.exports = {
  entry: "./src/server/index.ts",
  devtool: "source-map",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: `${__dirname}/build`,
    filename: "server.js"
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }]
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] }
};
