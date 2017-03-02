var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, 'dev');
var BUILD = path.resolve(__dirname, 'build');

var config = {

	entry: ['babel-polyfill', DEV+'/index.js'],
	output:{
		path:BUILD,
		filename: 'bundle.js'
	},
	module:{
		loaders:[{
			include:DEV,
			loader: 'babel-loader',
			query:{
				"presets": [
			      "es2015",
			      "react",
			      'stage-0'
			    ],
				"plugins": [
			      "transform-decorators-legacy",
			      "transform-class-properties",
			      "transform-es2015-modules-amd"
			    ]
			}
		}]
	},
	plugins:[	new webpack.DefinePlugin({
					'process.env':{
						NODE_ENV:'"production"'
					}
				}),
				new webpack.optimize.UglifyJsPlugin()]
};

module.exports = config;