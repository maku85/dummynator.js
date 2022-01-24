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
    };
  }
};
