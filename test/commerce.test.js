const { expect } = require('chai');

const dummy = require('..');

describe('The commerce generator', () => {
  it('gives random currency', () => {
    const res = dummy.commerce.currency();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random currencyCode', () => {
    const res = dummy.commerce.currencyCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random currencySymbol', () => {
    const res = dummy.commerce.currencySymbol();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardType', () => {
    const res = dummy.commerce.creditCardType();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardNumber', () => {
    const res = dummy.commerce.creditCardNumber();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random provider creditCardNumber', () => {
    const res = dummy.commerce.creditCardNumber('visa');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random creditCardCVV', () => {
    const res = dummy.commerce.creditCardCVV();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random iban', () => {
    const res = dummy.commerce.iban();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random IT iban', () => {
    const res = dummy.commerce.iban(false, 'IT');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random bic', () => {
    const res = dummy.commerce.bic();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
