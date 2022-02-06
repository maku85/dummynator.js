const { expect } = require('chai');

const dummy = require('..');

describe('The address generator', () => {
  it('generates random phone number', () => {
    const res = dummy.location.phone();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random street prefix', () => {
    dummy.locale = 'fr';
    const res = dummy.location.streetPrefix();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random street suffix', () => {
    dummy.locale = 'fr';
    const res = dummy.location.streetSuffix();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random street name', () => {
    const res = dummy.location.streetName();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random street address', () => {
    const res = dummy.location.streetAddress();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random building number', () => {
    const res = dummy.location.buildingNumber();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random city', () => {
    const res = dummy.location.city();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random postal code', () => {
    const res = dummy.location.postalCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random county', () => {
    const res = dummy.location.county();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random country', () => {
    const res = dummy.location.country();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random country code', () => {
    const res = dummy.location.countryCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.have.lengthOf(2);
  });

  it('gives random state', () => {
    const res = dummy.location.state();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random state abbreviation', () => {
    const res = dummy.location.stateAbbr();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.have.lengthOf(2);
  });

  it('gives random timeZone', () => {
    const res = dummy.location.timeZone();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  describe('Localized generator', () => {
    beforeEach(() => {
      dummy.locale = 'it';
    });

    it('generates random phone number', () => {
      const res = dummy.location.phone();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random street prefix', () => {
      dummy.locale = 'fr';
      const res = dummy.location.streetPrefix();
      console.log({ res });
      expect(res).to.be.not.undefined;
    });

    it('generates random street suffix', () => {
      dummy.locale = 'fr';
      const res = dummy.location.streetSuffix();
      console.log({ res });
      expect(res).to.be.not.undefined;
    });

    it('generates random street name', () => {
      const res = dummy.location.streetName();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random street address', () => {
      const res = dummy.location.streetAddress();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random building number', () => {
      const res = dummy.location.buildingNumber();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random city', () => {
      const res = dummy.location.city();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random postal code', () => {
      const res = dummy.location.postalCode();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });
  });
});
