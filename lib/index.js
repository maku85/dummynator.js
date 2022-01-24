const components = require('./components');

module.exports = class DataFaker {
  constructor(opts) {
    Object.entries(components).forEach(([key, Component]) => {
      const builder = new Component(opts);
      return Object.assign(this, { [key]: builder.build(this) });
    });
  }
};
