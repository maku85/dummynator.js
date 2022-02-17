const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class AddressComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random phone number
       *
       * @param {string} inFormat number format (default: random locale format)
       */
      phone: (inFormat) =>
        this.helpers.replaceSymbolWithNumber(
          inFormat || parent.random.arrayElement(this.definitions.phone),
        ),

      /**
       * Returns a random street prefix
       */
      streetPrefix: () => parent.random.arrayElement(this.definitions.street_prefix),

      /**
       * Returns a random street suffix
       */
      streetSuffix: () => parent.random.arrayElement(this.definitions.street_suffix),

      /**
       * Returns a random street name
       */
      streetName: () =>
        parent.random.boolean ? parent.person.lastName() : parent.person.firstName(),

      /**
       * Generates a random street address
       */
      streetAddress: () => {
        const formats = this.definitions.street_address;
        return parent.helpers.parseFormat(parent, formats[parent.random.number(formats.length)]);
      },

      /**
       * Returns a random building number
       */
      buildingNumber: () => {
        const formats = this.definitions.building_number;
        return this.helpers.replaceSymbolWithNumber(formats[parent.random.number(formats.length)]);
      },

      /**
       * Returns a random city
       */
      city: () => parent.random.arrayElement(this.definitions.city_name),

      /**
       * Generates a random postal code from specified format
       *
       * @param {String} inFormat the optional postal code format (default: locale format)
       */
      postalCode: (inFormat) => {
        let format = inFormat;

        // if format is not specified, use the format defined for the locale
        if (!format) {
          const localeFormat = this.definitions.postcode;
          format =
            typeof localeFormat === 'string'
              ? localeFormat
              : parent.random.arrayElement(localeFormat);
        }

        return this.helpers.replaceSymbols(format);
      },

      /**
       * Returns a random county name
       */
      county: () => parent.random.arrayElement(this.definitions.county),

      /**
       * Returns a random country
       */
      country: () => parent.random.arrayElement(this.definitions.country),

      /**
       * Returns a random country code
       *
       * @param {string} alphaCode the code to return ('alpha-2' or 'alpha-3'. Default: 'alpha-2')
       */
      countryCode: (alphaCode = 'alpha-2') => {
        switch (alphaCode) {
          case 'alpha-2':
            return parent.random.arrayElement(this.definitions.country_code);
          case 'alpha-3':
            return parent.random.arrayElement(this.definitions.country_code_alpha_3);
          default:
            return parent.random.arrayElement(this.definitions.country_code);
        }
      },

      /**
       * Returns a random state
       */
      state: () => parent.random.arrayElement(this.definitions.state),

      /**
       * Returns a random state abbreviated name
       */
      stateAbbr: () => parent.random.arrayElement(this.definitions.state_abbr),

      /**
       * Returns a random time zone
       */
      timeZone: () => parent.random.arrayElement(this.definitions.time_zone),
    };
  }
};
