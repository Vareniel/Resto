/* eslint-disable no-undef */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const sharpScript = require("./sharp.js"); // Import sharp script

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new sharpPlugin()
  ],
});

// Jalankan sharp.js setelah konfigurasi selesai
sharpScript();
