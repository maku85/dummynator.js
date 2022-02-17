const helpers = require('../../../utilities/helpers');
const random = require('../../../utilities/random');
const ibanConfig = require('./iban');

module.exports = {
  /**
   * Replace symbols in a credit card schemes including Luhn checksum
   *
   * @param {string} inString credit card scheme
   * @param {string} inSymbol symbol to replace
   */
  replaceCreditCardSymbols: (inString, inSymbol) => {
    let string = inString || '6453-####-####-####-###L';
    const symbol = inSymbol || '#';

    const getCheckBit = (inNumber) => {
      inNumber.reverse();
      const number = inNumber.map((num, index) => {
        let res = num;
        if (index % 2 === 0) {
          res *= 2;
          if (res > 9) res -= 9;
        }
        return res;
      });
      const sum = number.reduce((prev, curr) => prev + curr);
      return sum % 10;
    };

    string = helpers.regexpStyleStringParse(string); // replace [4-9] with a random number in range
    string = helpers.replaceSymbolWithNumber(string, symbol); // replace ### with random numbers

    const numberList = string
      .replace(/\D/g, '')
      .split('')
      .map((num) => parseInt(num, 10));
    const checkNum = getCheckBit(numberList);
    return string.replace('L', checkNum);
  },

  composeIBAN: (format) => {
    let s = '';
    let count = 0;
    for (let b = 0; b < format.bban.length; b++) {
      const bban = format.bban[b];
      let c = bban.count;
      count += bban.count;
      while (c > 0) {
        if (bban.type === 'a') {
          s += random.arrayElement(ibanConfig.alpha);
        } else if (bban.type === 'c') {
          if (random.number(100) < 80) {
            s += random.number(9);
          } else {
            s += random.arrayElement(ibanConfig.alpha);
          }
        } else if (c >= 3 && random.number(100) < 30) {
          if (random.boolean()) {
            s += random.arrayElement(ibanConfig.pattern100);
            c -= 2;
          } else {
            s += random.arrayElement(ibanConfig.pattern10);
            c--;
          }
        } else {
          s += random.number(9);
        }
        c--;
      }
      s = s.substring(0, count);
    }
    let checksum = 98 - ibanConfig.mod97(ibanConfig.toDigitString(`${s + format.country}00`));
    if (checksum < 10) {
      checksum = `0${checksum}`;
    }
    return format.country + checksum + s;
  },

  /**
   * Generate a random BIC code
   */
  composeBIC: () => {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const prob = random.number(100);

    let res = '';
    res += `${helpers.replaceSymbols('???')}${random.arrayElement(vowels)}`; // bank
    res += random.arrayElement(ibanConfig.iso3166); // nation
    res += `${helpers.replaceSymbols('?')}1`; // city

    // bank headquarters
    if (prob < 10) res += helpers.replaceSymbols(`?${random.arrayElement(vowels)}?`);
    if (prob < 40) res += helpers.replaceSymbols('###');

    return res;
  },
};
