import paths from '../paths';

const outputConfig = {
  output: {
    path: paths.DIST,
    filename: '[name]-[hash:8].js',
  }
};

export default outputConfig;