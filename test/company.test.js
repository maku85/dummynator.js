const { expect } = require('chai');

const dummy = require('..');

describe('The company generator', () => {
  it('generates random companyName', () => {
    const res = dummy.company.companyName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random catchPhrase', () => {
    const res = dummy.company.catchPhrase();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
