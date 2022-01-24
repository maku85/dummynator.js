const { helpers, random } = require('../utilities');

module.exports = class BaseComponent {
  constructor({ locale, locales } = {}) {
    this.locale = locale || 'en';
    this.localeFallback = 'en';
    this.locales = locales || {};

    this.helpers = helpers;
    this.random = random;
  }

  get definitions() {
    return {
      ...(this.locales[this.localeFallback] || {}),
      ...(this.locales[this.locale] || {}),
    };
  }
};
