const { expect } = require('chai');

const DataFaker = require('../lib');

const faker = new DataFaker();

describe('The faker lorem generator', () => {
  it('gives random word', () => {
    const res = faker.lorem.word();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random words', () => {
    const res = faker.lorem.words();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentence', () => {
    const res = faker.lorem.sentence();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentences', () => {
    const res = faker.lorem.sentences();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraph', () => {
    const res = faker.lorem.paragraph();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraphs', () => {
    const res = faker.lorem.paragraphs();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
