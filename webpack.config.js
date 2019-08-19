const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //local onde a entrada de informaçoes a ser tranformadas virao
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};
