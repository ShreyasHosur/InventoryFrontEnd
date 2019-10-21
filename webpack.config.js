const path  =  require("path");
const HTMLwebpackplugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BUILD_DIR = path.join(__dirname, "src/dist/");


module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path : path.resolve(__dirname , "dist"),
        filename : 'inventory/js/bundle.js'        
    },
    devtool: 'sourcemaps',
    devServer : {
        historyApiFallback: {
            rewrites: [
              { from: /./, to: '/index.html' },
            ],
          },
        proxy: {
            '**': {
              target: "http://localhost:8082",
              secure: false,
              bypass(req, res, proxyOptions) {
                if (req.headers.accept.indexOf('html') !== -1) {
                  console.log('Skipping proxy for browser request.');
                    return '/index.html';
              }
            }
          }
        }
    },
    plugins:[
        // new CleanWebpackPlugin({
        //     verbose: true,
        //     exclude: ["json"],
        //     cleanOnceBeforeBuildPatterns: [`${BUILD_DIR}`]
        //   }),
        new HTMLwebpackplugin({
            filename:'index.html',
            template:'./public/index.html',
            favicon: './public/favicon.ico',
            title: "inventory",
            filename: "index.html",
            inject : true
        }),
        new MiniCssExtractPlugin({
            filename: "inventory/js/styles.css"
          })
    ],
    module:{
        rules:[
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)?$/,
                use : {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true,
                      importLoaders: 1
                    }
                  },
                ],
                include: /\.module\.css$/
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ],
                exclude: /\.module\.css$/
              }
        ]
    }
}