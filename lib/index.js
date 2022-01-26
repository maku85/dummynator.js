const components = require('./components');

module.exports = class DataFaker {
  set locale(locale) {
    Object.entries(components).forEach(([key, Component]) => {
      const builder = new Component({ locale: locale || 'en' });
      return Object.assign(this, { [key]: builder.build(this) });
    });
  }
};
