const path = require('path');

module.exports = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    return config;
  },
};
