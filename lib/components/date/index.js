const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class DateComponent extends BaseComponent {
  constructor(opts) {
    super({ ...opts, locales });
  }

  build() {
    return {
      /**
       * Returns a random past date
       *
       * @param {number} years max number of past year (default: 1)
       * @param {date} refDate reference calculation date
       */
      past: (years, refDate) => {
        const date = refDate ? new Date(Date.parse(refDate)) : new Date();
        let past = date.getTime();
        past -= this.random.number({
          min: 1000,
          max: (years || 1) * 365 * 24 * 3600 * 1000,
        });
        date.setTime(past);

        return date;
      },

      /**
       * Returns a random future date
       *
       * @param {number} years max number of future year (default: 1)
       * @param {date} refDate reference calculation date
       */
      future: (years, refDate) => {
        const date = refDate ? new Date(Date.parse(refDate)) : new Date();
        let future = date.getTime();
        future += this.random.number({
          min: 1000,
          max: (years || 1) * 365 * 24 * 3600 * 1000,
        });
        date.setTime(future);

        return date;
      },

      /**
       * Returns a random date between other two dates
       *
       * @param {date} from from date
       * @param {date} to to date
       */
      between: (from, to) => {
        const fromMilli = Date.parse(from);
        const dateOffset = this.random.number(Date.parse(to) - fromMilli);
        return new Date(fromMilli + dateOffset);
      },

      /**
       * Returns a random week day
       *
       * @param {boolean} inAbbr returns abbreviated name
       */
      weekday: (inAbbr) =>
        this.random.arrayElement(this.definitions.weekday[inAbbr ? 'abbr' : 'wide']),

      /**
       * Returns a random month
       *
       * @param {boolean} inAbbr returns abbreviated name
       */
      month: (inAbbr) => this.random.arrayElement(this.definitions.month[inAbbr ? 'abbr' : 'wide']),
    };
  }
};
