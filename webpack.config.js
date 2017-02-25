var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, 'dev');
var BUILD = path.resolve(__dirname, 'build');

var config = {

	entry: DEV+"/index.js",
	output:{
		path:BUILD,
		filename: 'bundle.js'
	},
	module:{
		loaders:[{
			include:DEV,
			loader: 'babel-loader'
		}]
	}
};

module.exports = config;