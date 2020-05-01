const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm
const WebpackMerge = require("webpack-merge"); // installed via npm
const webpack = require("webpack"); //to access built-in plugins
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/load-presets");

module.exports = ({ mode, presets } = { mode: "none", presets: [] }) => {
  return WebpackMerge(
    {
      mode,
      optimization: {
        usedExports: true
      },
      module: {
        rules: [
          {
            test: /\.(svg|jpe?g|png|gif)$/,
            exclude: /node_modules/,
            use: {
              loader: "url-loader",
              options: {
                limit: 5000,
                name: "[name].[hash].[ext]",
                outputPath: "images"
              }
            }
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    mode !== "none" && modeConfig(mode),
    presets && presets.length > 0 && presetConfig({ mode, presets })
  );
};
