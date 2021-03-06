var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'components');

var config = {
  entry: APP_DIR + '/MainPage.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundlex.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }  
};

module.exports = config;