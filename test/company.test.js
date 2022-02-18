const { expect } = require('chai');

const dummy = require('..');

describe('The company generator', () => {
  it('generates random companyName', () => {
    const res = dummy.company.companyName();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random catchPhrase', () => {
    const res = dummy.company.catchPhrase();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gets random deparment', () => {
    const res = dummy.company.department();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  describe('Localized generator', () => {
    beforeEach(() => {
      dummy.locale = 'it';
    });

    it('generates random companyName', () => {
      const res = dummy.company.companyName();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('generates random catchPhrase', () => {
      const res = dummy.company.catchPhrase();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('gets random deparment', () => {
      const res = dummy.company.department();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });
  });
});
