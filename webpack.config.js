// 'path' is a native node.js pack that finds absolute...path?
var absolutePath = require('path');
// we must create absolute path, not relative like we've been using, 
//  so webpack can find file on our computer.

module.exports = {
  entry: "./app/assets/scripts/App.js",
  // will use this area to BUNDLE UP our javascript,
  output: {
    // must use absolute path here using node's 'path' package
    path: absolutePath.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  // will use this area to CONVERT our javascript
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        // webpack expects regular expression (regex) here
        test: /\.js$/, // tells the loader that we ONLY want changes to apply to javascript files
//                   this will make the conversion process faster
        // we only want babel to convert files we wrote ourselves. Not other packages
        exclude: /node_modules/
      }
    ]
  }
}