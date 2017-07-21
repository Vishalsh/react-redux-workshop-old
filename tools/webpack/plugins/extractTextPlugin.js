import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name]-[hash:8].css',
});

export default extractTextPlugin;