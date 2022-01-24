const { expect } = require('chai');

const DataFaker = require('../lib');

describe('The faker person generator', () => {
  [undefined, 'de', 'es', 'fr', 'it'].forEach((lang) => {
    const testDescr = lang ? `Locale "${lang}" generator` : 'Default locale generator';

    describe(testDescr, () => {
      const faker = new DataFaker({ locale: lang });

      it('generates random firstName', () => {
        const res = faker.person.firstName();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random male firstName', () => {
        const res = faker.person.firstName('male');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random female firstName', () => {
        const res = faker.person.firstName('female');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random lastName', () => {
        const res = faker.person.lastName();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random gender', () => {
        const res = faker.person.gender();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random binary gender', () => {
        const res = faker.person.gender(true);
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('gives random non binary gender', () => {
        const res = faker.person.gender(false);
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random title', () => {
        const res = faker.person.title();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random male title', () => {
        const res = faker.person.title('male');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random female title', () => {
        const res = faker.person.title('female');
        console.log({ res });
        expect(res).to.be.not.undefined;
      });

      it('generates random jobTitle', () => {
        const res = faker.person.jobTitle();
        console.log({ res });
        expect(res).to.be.not.undefined;
      });
    });
  });
});
