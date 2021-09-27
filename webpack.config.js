const webpack = require('webpack');
let pkg = require("./package.json");
let license = `
 ${pkg.name} v${pkg.version}

`;
module.exports = {
    entry: __dirname + "/out/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "index.js", //打包后输出文件的文件名
        library: "image-components",
        libraryTarget: "umd",

    },
    mode: 'development',
    devtool: 'source-map',
    externals: ["react", "react-dom", "maishu-chitu", "maishu-chitu-react", "maishu-chitu-service",
        "maishu-toolkit", "maishu-ui-toolkit", "maishu-wuzhui", "maishu-wuzhui-helper", "canvas"
    ],
    plugins: [
        new webpack.BannerPlugin(license),
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    }
}