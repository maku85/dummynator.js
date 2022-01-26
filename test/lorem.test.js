const { expect } = require('chai');

const dataFaker = require('..');

describe('The lorem generator', () => {
  it('gives random word', () => {
    const res = dataFaker.lorem.word();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random words', () => {
    const res = dataFaker.lorem.words();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentence', () => {
    const res = dataFaker.lorem.sentence();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentences', () => {
    const res = dataFaker.lorem.sentences();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraph', () => {
    const res = dataFaker.lorem.paragraph();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraphs', () => {
    const res = dataFaker.lorem.paragraphs();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
