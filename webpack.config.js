const path = require('path');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  context: srcPath,
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
};
