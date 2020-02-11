const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  devtool: "source-map",
  output: {
    path: path.resolve("./dist"),
    filename: "[name].dev.js",
    sourceMapFilename: "[name].dev.js.map",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve("./src")],
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.dev.json",
            },
          },
        ],
      },
    ],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        exclude: ["dependencies"],
        include: ["devDependencies", "peerDependencies"],
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
}
