var webpack = require("webpack")


module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css"},
			{test: /\.(png|ipg)$/, loader: "url-loader?limit=8192"}
		]
	},
	plugins: [
		new webpack.BannerPlugin("This file is created by Maber.")
	]
}