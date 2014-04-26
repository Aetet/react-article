var srcRoot = './src/app/';
console.log('react', __dirname + '/src/vendors/react/react.js');
module.exports = {
  cache: true,
  watch: false,
  entry: srcRoot + "index.jsx",

  output: {
    path: __dirname + '/public',
    filename: 'js/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx" }
    ]
  },
  
  resolve: {
    alias: {
   //   react: __dirname + '/src/vendors/react/react.js',
      root: __dirname + '/src/app'
    },
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: [".jsx", '', ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"]
  }
};