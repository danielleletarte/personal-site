module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.min.js'
},
  watch: true,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
    },
    {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader'
        ]
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
    }
    ]
  }
};
