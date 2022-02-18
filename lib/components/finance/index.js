const BaseComponent = require('../BaseComponent');
const locales = require('./locales');
const ibanConfig = require('./helpers/iban');
const { composeBIC, composeIBAN, replaceCreditCardSymbols } = require('./helpers');

module.exports = class FinanceComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random currency name
       */
      currency: () => parent.random.objectElement(this.definitions.currency, 'key'),

      /**
       * Returns a random currency code
       */
      currencyCode: () => parent.random.objectElement(this.definitions.currency).code,

      /**
       * Returns a random currency symbol
       */
      currencySymbol: () => {
        let symbol;
        while (!symbol) {
          symbol = parent.random.objectElement(this.definitions.currency).symbol;
        }
        return symbol;
      },

      /**
       * Returns a random credit card type
       */
      creditCardType: () =>
        parent.random.objectElement(this.definitions.credit_card, 'key').replace('_', ' '),

      /**
       * Generates a random credit card number
       *
       * @param {string} inProvider name of the credit card provider (default: random)
       */
      creditCardNumber: (inProvider) => {
        const providers = this.definitions.credit_card;
        let provider = inProvider;
        if (!provider || !providers[provider]) {
          provider = parent.random.objectElement(Object.keys(providers));
        }
        const formats = providers[provider];
        const format = parent.random.arrayElement(formats).replace(/\//g, '');
        return replaceCreditCardSymbols(format);
      },

      /**
       * Generates a random credit card CVV
       */
      creditCardCVV: () =>
        [...new Array(3)].reduce((acc) => `${acc}${parent.random.number({ max: 9 })}`, ''),

      /**
       * Generates a random iban
       *
       * @param {string} inCountryCode - country code from which you want to generate an IBAN (default: random)
       */
      iban: (inCountryCode) => {
        const { formats } = ibanConfig;
        const ibanFormat = inCountryCode
          ? formats.find((currentFormat) => currentFormat.country === inCountryCode)
          : parent.random.arrayElement(formats);
        if (!ibanFormat) throw new Error(`Country code ${inCountryCode} not supported.`);

        return composeIBAN(ibanFormat);
      },

      /**
       * Generates a random bic
       */
      bic: composeBIC,

      /**
       * Generates a random bitcoin address
       */
      bitcoinAddress: () => {
        const addressLength = parent.random.number({ min: 25, max: 34 });

        let address = parent.random.arrayElement(['1', '3']);
        for (let i = 0; i < addressLength - 1; i++)
          address += parent.random.arrayElement(
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''),
          );

        return address;
      },
    };
  }
};
