var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: ["./component_source/world_clock.js"],
    output: {
        path: path.resolve("./build"),
        filename: "world_clock.js",
        library: "WorldClock",
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    watch: false,
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/proposal-class-properties'
                    ]
                }
            }
        },]
    },
    plugins: [],
    resolve: {
        extensions: ['.js']
    },
    node: {},
    mode: "production",
    optimization: {
        minimize: true
    }
}