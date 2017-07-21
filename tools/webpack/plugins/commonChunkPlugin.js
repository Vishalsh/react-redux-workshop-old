import globals from '../globals';

import webpack from 'webpack';

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: globals.CHUNKS.VENDOR
});

export default commonChunkPlugin;