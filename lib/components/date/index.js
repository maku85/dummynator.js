const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class DateComponent extends BaseComponent {
  constructor(opts) {
    super({ ...opts, locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random date in the past
       *
       * @param {number} years max number of past year (default: 1)
       * @param {date} refDate date to use as reference point
       */
      past: (years, refDate) => {
        const date = refDate ? new Date(Date.parse(refDate)) : new Date();
        let past = date.getTime();
        past -= parent.random.number({
          min: 1000,
          max: (years || 1) * 365 * 24 * 3600 * 1000,
        });
        date.setTime(past);

        return date;
      },

      /**
       * Returns a random date in the future.
       *
       * @param {number} years max number of past year (default: 1)
       * @param {date} refDate date to use as reference point
       */
      future: (years, refDate) => {
        const date = refDate ? new Date(Date.parse(refDate)) : new Date();
        let future = date.getTime();
        future += parent.random.number({
          min: 1000,
          max: (years || 1) * 365 * 24 * 3600 * 1000,
        });
        date.setTime(future);

        return date;
      },

      /**
       * Returns a random date between other two dates
       *
       * @param {date} from early date
       * @param {date} to late date
       */
      between: (from, to) => {
        const fromMilli = Date.parse(from);
        const dateOffset = parent.random.number(Date.parse(to) - fromMilli);
        return new Date(fromMilli + dateOffset);
      },

      /**
       * Returns a random day of the week
       *
       * @param {boolean} inAbbr returns abbreviated name
       */
      weekday: (inAbbr) =>
        parent.random.arrayElement(this.definitions.weekday[inAbbr ? 'abbr' : 'wide']),

      /**
       * Returns a random name of a month
       *
       * @param {boolean} inAbbr returns abbreviated name
       */
      month: (inAbbr) =>
        parent.random.arrayElement(this.definitions.month[inAbbr ? 'abbr' : 'wide']),
    };
  }
};
