const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // TODO: path.resolve(__dirname, 'src/index.tsx') vs './src/index.tsx'
    main: './src/index.tsx',
  },
  output: {
    // TODO: filename hash
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {},
  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
