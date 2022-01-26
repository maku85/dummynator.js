const { expect } = require('chai');

const dataFaker = require('..');

describe('The commerce generator', () => {
  it('gives random currency', () => {
    const res = dataFaker.commerce.currency();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random currencyCode', () => {
    const res = dataFaker.commerce.currencyCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random currencySymbol', () => {
    const res = dataFaker.commerce.currencySymbol();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardType', () => {
    const res = dataFaker.commerce.creditCardType();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardNumber', () => {
    const res = dataFaker.commerce.creditCardNumber();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random provider creditCardNumber', () => {
    const res = dataFaker.commerce.creditCardNumber('visa');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardCVV', () => {
    const res = dataFaker.commerce.creditCardCVV();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random iban', () => {
    const res = dataFaker.commerce.iban();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random IT iban', () => {
    const res = dataFaker.commerce.iban(false, 'IT');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random bic', () => {
    const res = dataFaker.commerce.bic();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
