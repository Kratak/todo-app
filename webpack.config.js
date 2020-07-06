const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@*": path.resolve(__dirname, "src/*")
    }
  }
};
