const { expect } = require('chai');

const dummy = require('..');

describe('The internet generator', () => {
  it('generates random email', () => {
    const res = dummy.internet.email();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userName', () => {
    const res = dummy.internet.userName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random url', () => {
    const res = dummy.internet.url();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
