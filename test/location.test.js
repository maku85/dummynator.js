const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The faker address generator', () => {
  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const faker = new DataFaker({ locale: lang });

      it('generates random phone', () => {
        const res = faker.location.phone();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random streetPrefix', () => {
        const res = faker.location.streetPrefix();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random streetName', () => {
        const res = faker.location.streetName();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random streetAddress', () => {
        const res = faker.location.streetAddress();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random city', () => {
        const res = faker.location.city();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random postalCode', () => {
        const res = faker.location.postalCode();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random county', () => {
        const res = faker.location.county();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random country', () => {
        const res = faker.location.country();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random countryCode', () => {
        const res = faker.location.countryCode();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random state', () => {
        const res = faker.location.state();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random stateAbbr', () => {
        const res = faker.location.stateAbbr();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random timeZone', () => {
        const res = faker.location.timeZone();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
