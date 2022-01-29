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
        const provider = inProvider || this.random.arrayElement(this.definitions.email);
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
        switch (this.random.number(2)) {
          case 0:
            username = `${firstName}${this.random.number(99)}`;
            break;
          case 1: {
            const separator = this.random.arrayElement(['.', '_']);
            username = `${firstName}${separator}${lastName}`;
            break;
          }
          case 2: {
            const separator = this.random.arrayElement(['.', '_']);
            username = `${firstName}${separator}${lastName}${this.random.number(99)}`;
            break;
          }
          default:
        }

        return username.replace(/'/g, '').replace(/ /g, '').toLowerCase();
      },

      /**
       * Returns a random URL
       *
       * * @param {string} inProtocol protocol (default: random between 'http' and 'https')
       * * @param {string} inSubdomain subdomain (default: random  between 'www' or empty)
       * * @param {string} inDomainSuffix domain suffix (default: random)
       */
      url: ({ inProtocol, inSubdomain, inDomainSuffix } = {}) => {
        const protocol = inProtocol || this.random.arrayElement(['http', 'https']);
        const subdomain = inSubdomain || this.random.arrayElement(['www.', '']);
        const domainWord = parent.person
          .firstName()
          .replace(/([\\~#&*{}/:<>?|\\"'])/gi, '')
          .toLowerCase();
        const domainSuffix =
          inDomainSuffix || this.random.arrayElement(this.definitions.domain_suffix);
        return `${protocol}://${subdomain}${domainWord}.${domainSuffix}`;
      },

      /**
       * Returns a random IP
       *
       * @param {number} version The version of protocol (default: 4)
       */
      ip: (version = 4) =>
        version === 4
          ? [...new Array(4)].map(() => this.random.number(255)).join('.')
          : [...new Array(8)]
              .map(() =>
                [...Array(4)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
              )
              .join(':'),

      /**
       * Returns a random User Agent
       *
       * @param {string} browser The type of web browser (default: random)
       * @param {string} os The type of OS (default: random)
       * @param {string} device The type of device (default: random)
       */
      userAgent: ({ browser, os, device } = {}) => {
        let userAgents = this.definitions.user_agent;
        if (browser) userAgents = userAgents.filter((ua) => ua.browser === browser);
        if (os) userAgents = userAgents.filter((ua) => ua.os === os);
        if (device) userAgents = userAgents.filter((ua) => ua.device === device);
        return this.random.objectElement(userAgents).value;
      },

      /**
       * Returns a random MIME type
       *
       * @param {string} inType The type of mime (default: random)
       */
      mimeType: (inType) => {
        const mimes = inType
          ? this.definitions.mime_type[inType]
          : this.random.objectElement(this.definitions.mime_type);
        return this.random.arrayElement(mimes).type;
      },

      /**
       * Returns a random file extension
       *
       * @param {string} inType The type of extension (default: random)
       */
      fileExtension: (inType) => {
        const mimes = inType
          ? this.definitions.mime_type[inType]
          : this.random.objectElement(this.definitions.mime_type);
        const { extensions } = this.random.arrayElement(mimes);
        return this.random.arrayElement(extensions);
      },

      /**
       * Returns a random color
       *
       * @param {string} format The color format (default: 'hex')
       */
      color: (format = 'hex') =>
        format === 'hex'
          ? `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`
          : [this.random.number(255), this.random.number(255), this.random.number(255)],
    };
  }
};
