const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class InternetComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random email
       *
       * @param {string} inFirstName username firstName
       * @param {string} inLastName username lastName
       * @param {string} inProvider email provider
       */
      email: (inFirstName, inLastName, inProvider) => {
        const provider = inProvider || parent.random.arrayElement(this.definitions.email);
        return `${this.helpers.slugify(
          parent.internet.userName(inFirstName, inLastName),
        )}@${provider}`.toLowerCase();
      },

      /**
       * Returns a random username
       *
       * @param {string} inFirstName username firstName
       * @param {string} inLastName username lastName
       */
      userName: (inFirstName, inLastName) => {
        const firstName = inFirstName || parent.person.firstName();
        const lastName = inLastName || parent.person.lastName();

        let username;
        switch (parent.random.number(2)) {
          case 0:
            username = `${firstName}${parent.random.number(99)}`;
            break;
          case 1: {
            const separator = parent.random.arrayElement(['.', '_']);
            username = `${firstName}${separator}${lastName}`;
            break;
          }
          case 2: {
            const separator = parent.random.arrayElement(['.', '_']);
            username = `${firstName}${separator}${lastName}${parent.random.number(99)}`;
            break;
          }
          default:
        }

        return username.replace(/'/g, '').replace(/ /g, '').toLowerCase();
      },

      /**
       * Returns a random URL
       *
       * @param {mixed} inOpts {protocol, subdomain, domainSuffix}
       */
      url: (inOpts = {}) => {
        const protocol = inOpts.protocol || parent.random.arrayElement(['http', 'https']);
        const subdomain = inOpts.subdomain || parent.random.arrayElement(['www.', '']);
        const domainWord = parent.person
          .firstName()
          .replace(/([\\~#&*{}/:<>?|\\"'])/gi, '')
          .toLowerCase();
        const domainSuffix =
          inOpts.domainSuffix || parent.random.arrayElement(this.definitions.domain_suffix);
        return `${protocol}://${subdomain}${domainWord}.${domainSuffix}`;
      },

      /**
       * Returns a random IP
       *
       * @param {number} version The version of protocol (default: 4)
       */
      ip: (version = 4) =>
        version === 4
          ? [...new Array(4)].map(() => parent.random.number(255)).join('.')
          : [...new Array(8)]
              .map(() =>
                [...Array(4)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
              )
              .join(':'),

      /**
       * Returns a random User Agent
       *
       * @param {mixed} inOpts {browser, os, device}
       */
      userAgent: (inOpts = {}) => {
        const { browser, os, device } = inOpts;
        let userAgents = this.definitions.user_agent;
        if (browser) userAgents = userAgents.filter((ua) => ua.browser === browser);
        if (os) userAgents = userAgents.filter((ua) => ua.os === os);
        if (device) userAgents = userAgents.filter((ua) => ua.device === device);
        return parent.random.objectElement(userAgents).value;
      },

      /**
       * Returns a random MIME type
       *
       * @param {string} inType The type of mime (default: random)
       */
      mimeType: (inType) => {
        const mimes = inType
          ? this.definitions.mime_type[inType]
          : parent.random.objectElement(this.definitions.mime_type);
        return parent.random.arrayElement(mimes).type;
      },

      /**
       * Returns a random file extension
       *
       * @param {string} inType The type of extension (default: random)
       */
      fileExtension: (inType) => {
        const mimes = inType
          ? this.definitions.mime_type[inType]
          : parent.random.objectElement(this.definitions.mime_type);
        const { extensions } = parent.random.arrayElement(mimes);
        return parent.random.arrayElement(extensions);
      },

      /**
       * Returns a random color
       *
       * @param {string} format The color format (default: 'hex')
       */
      color: (format = 'hex') =>
        format === 'hex'
          ? `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`
          : [parent.random.number(255), parent.random.number(255), parent.random.number(255)],
    };
  }
};
