const { expect } = require('chai');

const dummy = require('..');

describe('The lorem generator', () => {
  it('gives random word', () => {
    const res = dummy.lorem.word();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random words', () => {
    const res = dummy.lorem.words();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentence', () => {
    const res = dummy.lorem.sentence();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random sentences', () => {
    const res = dummy.lorem.sentences();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraph', () => {
    const res = dummy.lorem.paragraph();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random paragraphs', () => {
    const res = dummy.lorem.paragraphs();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
