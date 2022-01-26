const { expect } = require('chai');

const dummy = require('..');

describe('The date generator', () => {
  it('gives random past date', () => {
    const res = dummy.date.past();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random future date', () => {
    const res = dummy.date.future();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random between date', () => {
    const res = dummy.date.between(new Date(), new Date());
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random weekday', () => {
    const res = dummy.date.weekday();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random month', () => {
    const res = dummy.date.month();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
