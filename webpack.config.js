const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack');



module.exports = function(env, options) {
    const mode = options.mode;
    const isProduction = mode === 'production';
    const entryPoint = './main.js';
    const outputDir = path.resolve(__dirname, 'dist');
    const outputFile = 'assets/js/[name].[hash:10].js';

    const config = {
        entry: {
            polyfill: 'babel-polyfill',
            main: entryPoint,
            vendor: [
                'axios',
                'vue',
                'vue-router',
                'slick-carousel'
            ]
        },
        context: path.resolve(__dirname, 'src'),
        mode: env,
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: 'index.html',
                minify: isProduction
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].[hash:10].css',
                chunkFilename: 'assets/css/[id].[hash:10].css',
                sourceMap: !isProduction
            }),
            new CopyWebpackPlugin([
                {
                    from: '../static/favicon.ico',
                }
            ]),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
              })
        ],
        output: {
            path: outputDir,
            publicPath: '/',
            filename: outputFile
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /node_modules/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: !isProduction
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                    include: path.resolve(__dirname, 'src/scss')
                },
                {
                    test: /\.(css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                    include: /(node_modules)/
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[hash].[ext]'
                        }
                    },

                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      name: 'assets/images/[name].[hash].[ext]'
                    }
                  },
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader'
                    }
                }
            ]
        },
        devtool: '#eval-source-map',
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.common.js'
            }
        },
        devServer: {
            port: 8000,
            inline: true
        }
    };

    if (isProduction) {
        config.plugins.push(
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })
        );
    }

    return config;
};