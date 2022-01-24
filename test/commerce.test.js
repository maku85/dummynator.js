const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The faker commerce generator', () => {
  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const faker = new DataFaker({ locale: lang });

      it('gives random currency', () => {
        const res = faker.commerce.currency();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random currencyCode', () => {
        const res = faker.commerce.currencyCode();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random currencySymbol', () => {
        const res = faker.commerce.currencySymbol();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random creditCardType', () => {
        const res = faker.commerce.creditCardType();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random creditCardNumber', () => {
        const res = faker.commerce.creditCardNumber();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random provider creditCardNumber', () => {
        const res = faker.commerce.creditCardNumber('visa');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random creditCardCVV', () => {
        const res = faker.commerce.creditCardCVV();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random iban', () => {
        const res = faker.commerce.iban();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random IT iban', () => {
        const res = faker.commerce.iban(false, 'IT');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random bic', () => {
        const res = faker.commerce.bic();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
