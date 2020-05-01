module.exports = env => {
  console.log("dev mode", env);
  return {
    output: {
      filename: "[name].development.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  };
};
