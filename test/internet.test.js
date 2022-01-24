const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The faker internet generator', () => {
  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    // [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const faker = new DataFaker({ locale: lang });

      it('generates random email', () => {
        const res = faker.internet.email();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random userName', () => {
        const res = faker.internet.userName();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random url', () => {
        const res = faker.internet.url();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
