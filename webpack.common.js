const path = require("path");

module.exports = {
  entry: {
    contentScripts: path.join(__dirname, "src/contentScripts.ts")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
