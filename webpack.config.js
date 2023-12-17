const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundler: path.resolve(__dirname, "/src/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new html_webpack_plugin({
      title: "Form Validation",
      filename: "index.html",
      chunks: ["bundler"],
      template: "/src/template.html",
    }),
  ],
};
