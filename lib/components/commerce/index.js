const BaseComponent = require('../BaseComponent');
const locales = require('./locales');
const ibanConfig = require('./helpers/iban');
const { composeBIC, composeIBAN, replaceCreditCardSymbols } = require('./helpers');

module.exports = class FinanceComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build() {
    return {
      /**
       * Returns a random currency
       */
      currency: () => this.random.objectElement(this.definitions.currency, 'key'),

      /**
       * Returns a random currency code
       */
      currencyCode: () => this.random.objectElement(this.definitions.currency).code,

      /**
       * Returns a random currency symbol
       */
      currencySymbol: () => {
        let symbol;
        while (!symbol) {
          symbol = this.random.objectElement(this.definitions.currency).symbol;
        }
        return symbol;
      },

      /**
       * Returns a random credit card type
       */
      creditCardType: () =>
        this.random.objectElement(this.definitions.credit_card, 'key').replace('_', ' '),

      /**
       * Returns a random credit card number
       *
       * @param {string} provider credit card provider (default: random)
       */
      creditCardNumber: (inProvider) => {
        const providers = this.definitions.credit_card;
        let provider = inProvider;
        if (!provider || !providers[provider]) {
          provider = this.random.objectElement(Object.keys(providers));
        }
        const formats = providers[provider];
        const format = this.random.arrayElement(formats).replace(/\//g, '');
        return replaceCreditCardSymbols(format);
      },

      /**
       * Returns a credit card CVV
       */
      creditCardCVV: () =>
        [...new Array(3)].reduce((acc) => `${acc}${this.random.number({ max: 9 })}`, ''),

      /**
       * Returns a random iban code
       *
       * @param {string} [countryCode] - country code from which you want to generate an IBAN (default: random)
       * @param {boolean} [formatted=false] - returns a formatted version of the generated IBAN
       */
      iban: (inCountryCode, inFormatted) => {
        const { formats } = ibanConfig;
        const ibanFormat = inCountryCode
          ? formats.find((currentFormat) => currentFormat.country === inCountryCode)
          : this.random.arrayElement(formats);
        if (!ibanFormat) throw new Error(`Country code ${inCountryCode} not supported.`);

        return composeIBAN(ibanFormat, inFormatted);
      },

      /**
       * Returns a random bic
       */
      bic: composeBIC,
    };
  }
};
