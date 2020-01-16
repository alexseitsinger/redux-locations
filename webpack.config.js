const path = require("path")
const nodeExternals = require("webpack-node-externals")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  devtool: false,
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve("./src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        sourceMap: false,
        terserOptions: {
          warnings: false,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        exclude: ["dependencies"],
        include: ["devDependencies", "peerDependencies"]
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
}
