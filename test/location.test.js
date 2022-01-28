const { expect } = require('chai');

const dummy = require('..');

describe('The address generator', () => {
  it('generates random phone', () => {
    const res = dummy.location.phone();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetPrefix', () => {
    dummy.locale = 'fr';
    const res = dummy.location.streetPrefix();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetName', () => {
    const res = dummy.location.streetName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random streetAddress', () => {
    const res = dummy.location.streetAddress();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random city', () => {
    const res = dummy.location.city();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random postalCode', () => {
    const res = dummy.location.postalCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random county', () => {
    const res = dummy.location.county();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random country', () => {
    const res = dummy.location.country();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random countryCode', () => {
    const res = dummy.location.countryCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random state', () => {
    const res = dummy.location.state();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random stateAbbr', () => {
    const res = dummy.location.stateAbbr();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random timeZone', () => {
    const res = dummy.location.timeZone();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
