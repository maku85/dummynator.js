const BaseComponent = require('../BaseComponent');
const { random } = require('../../utilities');

module.exports = class RandomComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts });
  }

  build() {
    const self = this;

    return {
      /**
       * Returns a single random number based on a max number or range
       *
       * @param {mixed} inOpts {min, max, precision}
       */
      number: random.number,

      /**
       * Returns a random boolean value
       */
      boolean: random.boolean,

      /**
       * Takes an array and returns a random element of the array
       *
       * @param {array} inArray
       */
      arrayElement: random.arrayElement,

      /**
       * Takes an object and returns a random key or value
       *
       * @param {object} object
       */
      objectElement: random.objectElement,
    };
  }
};
