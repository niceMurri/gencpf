const path = require('path')

console.log(
  path.resolve(__dirname, 'node_modules', 'regenerator-runtime', 'runtime.js')
)

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'assets', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
    ],
  },
  devtool: 'source-map',
}
