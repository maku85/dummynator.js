const { expect } = require('chai');

const dataFaker = require('..');

describe('The date generator', () => {
  it('gives random past date', () => {
    const res = dataFaker.date.past();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random future date', () => {
    const res = dataFaker.date.future();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random between date', () => {
    const res = dataFaker.date.between(new Date(), new Date());
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random weekday', () => {
    const res = dataFaker.date.weekday();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random month', () => {
    const res = dataFaker.date.month();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
