const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: "source-map",
  mode: "development",
  // mode: "production",

  entry: {
    main: "./src/assets/js/index.js",
  },

  // watch: true,
  watchOptions: {
    ignored: ["node_modules/**"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html", "!assets/**"], //削除対象外を指定
    }),
  ],

  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {    
            loader: "css-loader",
            options: {
               importLoaders: 2, 
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // options
                      stage: 0,
                      browsers: "last 2 versions",
                      autoprefixer: { grid: true }
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {  
                outputStyle: "compressed",
              },
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]"
        }
      },
    ],
  },
  target: ["web", "es5"],

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/img/[name][ext][query]",
    filename: "assets/js/[name].js",
    // clean: {
    //   keep: /index.html/,
    // } 
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      // initial or all
      chunks: 'initial',
    }
  },

  devServer: {
    static: "dist",
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  
};