/**
 * Returns a single random number based on a max number or range
 *
 * @param {mixed} inOpts {min, max, precision}
 */
const number = (inOpts) => {
  let opts = inOpts || {};

  if (typeof opts === 'number') opts = { max: opts };
  if (!opts.min) opts.min = 0;
  if (!opts.max) opts.max = 99999;
  if (!opts.precision) opts.precision = 1;

  let { max } = opts;
  if (max >= 0) max += opts.precision;

  const randomNumber = opts.min + Math.floor(Math.random() * (opts.max - opts.min) + opts.min);
  return randomNumber;
};
module.exports.number = number;

/**
 * Returns a random boolean value
 */
const boolean = () => Math.random() < 0.5;
module.exports.boolean = boolean;

/**
 * Takes an array and returns a random element of the array
 *
 * @param {array} inArray
 */
const arrayElement = (inArray) => {
  const array = inArray || [];
  if (!array.length) return null;

  const r = number({ max: array.length });
  return array[r];
};
module.exports.arrayElement = arrayElement;

/**
 * Takes an object and returns a random key or value
 *
 * @param {object} object
 */
const objectElement = (inObject, field) => {
  const object = inObject || {};
  const array = Object.keys(object);
  const key = this.arrayElement(array);

  return field === 'key' ? key : object[key];
};
module.exports.objectElement = objectElement;
