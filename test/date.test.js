const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The date generator', () => {
  describe('Not localized data', () => {
    const dataFaker = new DataFaker();

    it('gives random past date', () => {
      const res = dataFaker.date.past();
      console.log({ res });
      expect(res).to.be.not.undefined;
    });

    it('gives random future date', () => {
      const res = dataFaker.date.future();
      console.log({ res });
      expect(res).to.be.not.undefined;
    });

    it('gives random between date', () => {
      const res = dataFaker.date.between(new Date(), new Date());
      console.log({ res });
      expect(res).to.be.not.undefined;
    });
  });

  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const dataFaker = new DataFaker({ locale: lang });

      it('gives random weekday', () => {
        const res = dataFaker.date.weekday();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random month', () => {
        const res = dataFaker.date.month();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
