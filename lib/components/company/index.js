const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class CompanyComponent extends BaseComponent {
  constructor(opts) {
    super({ ...opts, locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random company name
       */
      companyName: () => {
        const companySuffix = this.random.arrayElement(this.definitions.suffix);
        const format = this.random.arrayElement(this.definitions.name);
        const res = this.helpers.parseFormat(parent, format);
        return `${res}${this.random.boolean() ? ` ${companySuffix}` : ''}`;
      },

      /**
       * Returns a random company catch phrase
       */
      catchPhrase: () => {
        const adjective = this.random.arrayElement(this.definitions.adjective);
        const descriptor = this.random.arrayElement(this.definitions.descriptor);
        const catchPhraseNoun = this.random.arrayElement(this.definitions.noun);

        return this.helpers.startCase(`${adjective} ${descriptor} ${catchPhraseNoun}`);
      },

      /**
       * Returns a random department
       */
      department: () => {
        throw new Error('Sorry, not yet implemented');
      },
    };
  }
};
