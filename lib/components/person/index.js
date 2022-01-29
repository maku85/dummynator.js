const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class PersonComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts, locales });
  }

  build(parent) {
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
            firstName = parent.random.arrayElement(this.definitions.male_first_name);
            break;
          case '1':
          case 'female':
            firstName = parent.random.arrayElement(this.definitions.female_first_name);
            break;
          default:
        }

        return firstName || parent.random.arrayElement(this.definitions.first_name);
      },

      /**
       * Returns a random last name
       */
      lastName: () => parent.random.arrayElement(this.definitions.last_name),

      /**
       * Returns a random full name
       */
      fullName: () => parent.random.arrayElement(this.definitions.last_name),

      /**
       * Returns a random gender
       */
      gender: (binary) =>
        parent.random.arrayElement(this.definitions[binary ? 'binary_gender' : 'gender']),

      /**
       * Returns a random language
       */
      language: (binary) =>
        parent.random.arrayElement(this.definitions[binary ? 'binary_gender' : 'gender']),

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
            title = parent.random.arrayElement(this.definitions.male_prefix);
            break;
          case '1':
          case 'female':
            title = parent.random.arrayElement(this.definitions.female_prefix);
            break;
          default:
        }

        return title || parent.random.arrayElement(this.definitions.prefix);
      },

      /**
       * Returns a random job title
       */
      jobTitle: () => {
        const jobDescriptor = parent.random.arrayElement(this.definitions.title.descriptor);
        const jobArea = parent.random.arrayElement(this.definitions.title.level);
        const jobType = parent.random.arrayElement(this.definitions.title.job);

        return `${jobDescriptor} ${jobArea} ${jobType}`;
      },
    };
  }
};
