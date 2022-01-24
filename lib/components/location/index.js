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
          inFormat || this.random.arrayElement(this.definitions.phone),
        ),

      /**
       * Returns a random street prefix
       */
      streetPrefix: () => this.random.arrayElement(this.definitions.street_prefix),

      /**
       * Returns a random street suffix
       */
      streetSuffix: () => this.random.arrayElement(this.definitions.street_suffix),

      /**
       * Returns a random street name
       */
      streetName: () =>
        this.random.boolean ? parent.person.lastName() : parent.person.firstName(),

      /**
       * Returns a random street address
       */
      streetAddress: () => {
        const formats = this.definitions.street_address;
        return this.helpers.parseFormat(parent, formats[this.random.number(formats.length)]);
      },

      /**
       * Returns a random building number
       */
      buildingNumber: () => {
        const formats = this.definitions.building_number;
        return this.helpers.replaceSymbolWithNumber(formats[this.random.number(formats.length)]);
      },

      /**
       * Returns a random city
       */
      city: () => this.random.arrayElement(this.definitions.city_name),

      /**
       * Returns a random postal code
       *
       * @param {String} inFormat code format (default: locale format)
       */
      postalCode: (inFormat) => {
        let format = inFormat;

        if (!format) {
          const localeFormat = this.definitions.postcode;
          format =
            typeof localeFormat === 'string'
              ? localeFormat
              : this.random.arrayElement(localeFormat);
        }

        return this.helpers.replaceSymbols(format);
      },

      /**
       * Returns a random county
       */
      county: () => this.random.arrayElement(this.definitions.county),

      /**
       * Returns a random country
       */
      country: () => this.random.arrayElement(this.definitions.country),

      /**
       * Returns a random country code
       *
       * @param {string} alphaCode default alpha-2
       */
      countryCode: (alphaCode) => {
        if (typeof alphaCode === 'undefined' || alphaCode === 'alpha-2') {
          return this.random.arrayElement(this.definitions.country_code);
        }

        if (alphaCode === 'alpha-3') {
          return this.random.arrayElement(this.definitions.country_code_alpha_3);
        }

        return this.random.arrayElement(this.definitions.country_code);
      },

      /**
       * Returns a random state
       */
      state: () => this.random.arrayElement(this.definitions.state),

      /**
       * Returns a random state abbreviation
       */
      stateAbbr: () => this.random.arrayElement(this.definitions.state_abbr),

      /**
       * Geenrates a random time zone
       */
      timeZone: () => this.random.arrayElement(this.definitions.time_zone),
    };
  }
};
