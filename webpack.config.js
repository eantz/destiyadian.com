var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./js/src/app.jsx",
        style: "./css/style.less"
    },
    output: {
        path: "./js/lib",
        filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.jsx/, exclude: (/node_modules|bower_components/), loader: "babel"},
        { test: /\.less/, exclude: (/node_modules|bower_components/), loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
      ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}