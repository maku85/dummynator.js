const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class PersonComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build() {
    return {
      /**
       * Returns a random first name
       *
       * @param {string|number} inGender gender type
       */
      firstName: (inGender) => {
        let firstName;

        const gender = (inGender || '').toString().toLowerCase();
        switch (gender) {
          case '0':
          case 'male':
            firstName = this.random.arrayElement(this.definitions.male_first_name);
            break;
          case '1':
          case 'female':
            firstName = this.random.arrayElement(this.definitions.female_first_name);
            break;
          default:
        }

        return firstName || this.random.arrayElement(this.definitions.first_name);
      },

      /**
       * Returns a random last name
       */
      lastName: () => this.random.arrayElement(this.definitions.last_name),

      /**
       * Returns a random full name
       */
      fullName: () => this.random.arrayElement(this.definitions.last_name),

      /**
       * Returns a random gender
       */
      gender: (binary) =>
        this.random.arrayElement(this.definitions[binary ? 'binary_gender' : 'gender']),

      /**
       * Returns a random language
       */
      language: (binary) =>
        this.random.arrayElement(this.definitions[binary ? 'binary_gender' : 'gender']),

      /**
       * Returns a random title
       *
       * @param {string} inGender gender type
       */
      title: (inGender) => {
        let title;

        const gender = (inGender || '').toString().toLowerCase();
        switch (gender) {
          case '0':
          case 'male':
            title = this.random.arrayElement(this.definitions.male_prefix);
            break;
          case '1':
          case 'female':
            title = this.random.arrayElement(this.definitions.female_prefix);
            break;
          default:
        }

        return title || this.random.arrayElement(this.definitions.prefix);
      },

      /**
       * Returns a random job title
       */
      jobTitle: () => {
        const jobDescriptor = this.random.arrayElement(this.definitions.title.descriptor);
        const jobArea = this.random.arrayElement(this.definitions.title.level);
        const jobType = this.random.arrayElement(this.definitions.title.job);

        return `${jobDescriptor} ${jobArea} ${jobType}`;
      },
    };
  }
};
