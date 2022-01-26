const { expect } = require('chai');

const dataFaker = require('..');

describe('The internet generator', () => {
  it('generates random email', () => {
    const res = dataFaker.internet.email();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userName', () => {
    const res = dataFaker.internet.userName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random url', () => {
    const res = dataFaker.internet.url();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
