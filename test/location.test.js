const { expect } = require('chai');

const dataFaker = require('..');

describe('The address generator', () => {
  it('generates random phone', () => {
    const res = dataFaker.location.phone();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetPrefix', () => {
    const res = dataFaker.location.streetPrefix();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetName', () => {
    const res = dataFaker.location.streetName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetAddress', () => {
    const res = dataFaker.location.streetAddress();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random city', () => {
    const res = dataFaker.location.city();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random postalCode', () => {
    const res = dataFaker.location.postalCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random county', () => {
    const res = dataFaker.location.county();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random country', () => {
    const res = dataFaker.location.country();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random countryCode', () => {
    const res = dataFaker.location.countryCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random state', () => {
    const res = dataFaker.location.state();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random stateAbbr', () => {
    const res = dataFaker.location.stateAbbr();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random timeZone', () => {
    const res = dataFaker.location.timeZone();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
