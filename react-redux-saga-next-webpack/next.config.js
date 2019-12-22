const path = require('path');

module.exports = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias.rredux = path.join(__dirname, 'src/redux');
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    config.resolve.alias.apis = path.join(__dirname, 'src/apis');
    return config;
  },
};
