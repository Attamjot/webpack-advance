const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  console.log("prod", env);
  return {
    devtool: "source-map",
    output: {
      filename: "[name].[hash].production.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "[name].[hash].production.css" }),
      new CleanWebpackPlugin()
    ]
  };
};
