const { expect } = require('chai');

const dummy = require('..');

describe('The date generator', () => {
  it('gives random past date', () => {
    const res = dummy.date.past();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random past date with provided years', () => {
    const res = dummy.date.past(5);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random past date with provided years and ref date', () => {
    const res = dummy.date.past(5, '2000-02-21T14:28:12.236Z');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random future date', () => {
    const res = dummy.date.future();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random future date with provided years', () => {
    const res = dummy.date.future(5);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random future date with provided years and ref date', () => {
    const res = dummy.date.future(5, '2030-02-21T14:28:12.236Z');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random between date', () => {
    const res = dummy.date.between('2000-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random week day', () => {
    const res = dummy.date.weekday();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random abbreviated week day', () => {
    const res = dummy.date.weekday(true);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random month', () => {
    const res = dummy.date.month();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random abbreviated month', () => {
    const res = dummy.date.month(true);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  describe('Localized generator', () => {
    beforeEach(() => {
      dummy.locale = 'it';
    });

    it('gives random week day', () => {
      const res = dummy.date.weekday();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });

    it('gives random month', () => {
      const res = dummy.date.month();
      console.log({ res });
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
    });
  });
});
