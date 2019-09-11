const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SassExtract = new ExtractTextPlugin('css/[name].css');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        main: ['./main.js']
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: SassExtract.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'fonts'
                    }
                }]
            }
        ]
    },
    devtool: '#eval-source-map',    //  通过这个配置可以查看源映射文件，生产环境需去掉
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        compress: false,
        port: 8080,
        // disableHostCheck: true, //  兼容IE不做客户端是否为白名单的安全性检查，开发环境不需要，生产环境需要去掉
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'One date One Question',
        //     template: './index.html'
        // }),
        new HtmlWebpackPlugin({
            title: '测试',
            template: './index.html'
        }),
        SassExtract
    ],
    performance: {
        hints: 'error',
	    maxAssetSize: 8000000,  //  设置的资源最大接受数为8M
        maxEntrypointSize: 8000000
    }
};