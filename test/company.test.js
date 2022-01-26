const { expect } = require('chai');

const dataFaker = require('..');

describe('The company generator', () => {
  it('generates random companyName', () => {
    const res = dataFaker.company.companyName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random catchPhrase', () => {
    const res = dataFaker.company.catchPhrase();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
