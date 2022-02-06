const { expect } = require('chai');

const dummy = require('..');

describe('The lorem generator', () => {
  it('gives random word', () => {
    const res = dummy.lorem.word();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random word with a specific length', () => {
    const res = dummy.lorem.word(8);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.have.lengthOf(8);
  });

  it('gives random words', () => {
    const res = dummy.lorem.words();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random specific number of words', () => {
    const res = dummy.lorem.words(5);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res.split(' ')).to.have.lengthOf(5);
  });

  it('generates random sentence', () => {
    const res = dummy.lorem.sentence();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random sentence witch a specific number of words', () => {
    const res = dummy.lorem.sentence(10);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res.split(' ')).to.have.lengthOf(10);
  });

  it('generates random sentences', () => {
    const res = dummy.lorem.sentences();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random paragraph', () => {
    const res = dummy.lorem.paragraph();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random paragraphs', () => {
    const res = dummy.lorem.paragraphs();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });
});
