module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: './[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { 
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}