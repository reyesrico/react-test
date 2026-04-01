const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'components');

module.exports = {
  entry: `${APP_DIR}/MainPage.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundlex.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        use: 'babel-loader'
      }
    ]
  }
};
