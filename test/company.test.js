const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The faker company generator', () => {
  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const faker = new DataFaker({ locale: lang });

      it('generates random companyName', () => {
        const res = faker.company.companyName();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random catchPhrase', () => {
        const res = faker.company.catchPhrase();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
