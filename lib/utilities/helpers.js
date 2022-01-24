const random = require('./random');

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the start cased string
 */
module.exports.startCase = (string) =>
  (string || '')
    .split('')
    .map((char, index) => (index === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('');

/**
 * Parse composed format
 *
 * @param {object} dataFaker dataFaker instance
 * @param {string} string string to parse
 */
const parseFormat = (dataFaker, string) => {
  if (typeof string !== 'string' || !string.length) return '';

  const start = string.search('{{');
  const end = string.search('}}');
  if (start === -1 && end === -1) return string;

  let method = string.substring(start + 2, end);

  let params;
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(method);
  if (matches) {
    method = method.replace(regExp, '');
    const parameters = matches[1];

    try {
      params = JSON.parse(parameters);
    } catch (err) {
      params = parameters;
    }
  }

  const parts = method.split('.');
  if (typeof dataFaker[parts[0]] === 'undefined') {
    throw new Error(`Invalid module: ${parts[0]}`);
  }
  if (typeof dataFaker[parts[0]][parts[1]] === 'undefined') {
    throw new Error(`Invalid method: ${parts[0]}.${parts[1]}`);
  }

  const fn = dataFaker[parts[0]][parts[1]];

  let result;
  if (typeof params === 'string' && !params.length) {
    result = fn.call(this);
  } else {
    result = fn.call(this, params);
  }

  const res = string.replace(`{{${method}}}`, result || '').trim();
  return parseFormat(dataFaker, res);
};
module.exports.parseFormat = parseFormat;

/**
 * Slugifies a string
 *
 * @param {string} string string to slugifies
 */
module.exports.slugify = (string) => (string || '').replace(/ /g, '-').replace(/[^\w\\.\\-]+/g, '');

/**
 * Parses string and replace symbol with a random number from 1-10
 *
 * @param {string} string string to parse
 * @param {string} symbol symbol to replace (default: '#')
 */
module.exports.replaceSymbolWithNumber = (inString, symbol) =>
  (inString || '')
    .split('')
    .map((char) => {
      switch (char) {
        case symbol:
        case '#':
          return random.number(9);
        case '!':
          return random.number({ min: 2, max: 9 });
        default:
          return char;
      }
    })
    .join('');

/**
 * Repeat 'string' 'num' times
 *
 * @param {string} string string to repeat
 * @param {number} num number of time
 */
const repeatString = (string, num) => {
  let text = '';
  for (let i = 0; i < num || 0; i++) {
    text += string.toString();
  }
  return text;
};

/**
 * Parse string patterns in a similar way to RegExp
 *
 * @param {string} string
 */
module.exports.regexpStyleStringParse = (inString) => {
  let string = inString || '';

  const RANGE_REP_REG = /(.)\{(\d+)\,(\d+)\}/;
  const REP_REG = /(.)\{(\d+)\}/;
  const RANGE_REG = /\[(\d+)\-(\d+)\]/;
  let min;
  let max;
  let tmp;
  let repetitions;
  let token = string.match(RANGE_REP_REG);
  while (token !== null) {
    min = parseInt(token[2], 10);
    max = parseInt(token[3], 10);
    if (min > max) {
      tmp = max;
      max = min;
      min = tmp;
    }
    repetitions = random.number({ min, max });
    string =
      string.slice(0, token.index) +
      repeatString(token[1], repetitions) +
      string.slice(token.index + token[0].length);
    token = string.match(RANGE_REP_REG);
  }
  token = string.match(REP_REG);
  while (token !== null) {
    repetitions = parseInt(token[2], 10);
    string =
      string.slice(0, token.index) +
      repeatString(token[1], repetitions) +
      string.slice(token.index + token[0].length);
    token = string.match(REP_REG);
  }

  token = string.match(RANGE_REG);
  while (token !== null) {
    min = parseInt(token[1], 10);
    max = parseInt(token[2], 10);
    if (min > max) {
      tmp = max;
      max = min;
      min = tmp;
    }
    string =
      string.slice(0, token.index) +
      random.number({ min, max }).toString() +
      string.slice(token.index + token[0].length);
    token = string.match(RANGE_REG);
  }
  return string;
};

/**
 * Convert string of symbols with numbers and/or letters
 * - # will be replaced with number
 * - ? with be replaced with letter
 * - * will be randomly replaced with number or letter
 *
 * @param {string} inString string to convert
 */
module.exports.replaceSymbols = (inString) => {
  const alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (inString || '')
    .split('')
    .map((char) => {
      switch (char) {
        case '#':
          return random.number(9);
        case '?':
          return random.arrayElement(alpha);
        case '*':
          return random.boolean() ? random.arrayElement(alpha) : random.number(9);
        default:
          return char;
      }
    })
    .join('');
};
