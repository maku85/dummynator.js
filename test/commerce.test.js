const { expect } = require('chai');

const dummy = require('..');

describe('The commerce generator', () => {
  it('gives random currency', () => {
    const res = dummy.commerce.currency();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random currency code', () => {
    const res = dummy.commerce.currencyCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.have.lengthOf(3);
  });

  it('gives random currency symbol', () => {
    const res = dummy.commerce.currencySymbol();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card type', () => {
    const res = dummy.commerce.creditCardType();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card number', () => {
    const res = dummy.commerce.creditCardNumber();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random provider credit card number', () => {
    const res = dummy.commerce.creditCardNumber('visa');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card CVV', () => {
    const res = dummy.commerce.creditCardCVV();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random iban code', () => {
    const res = dummy.commerce.iban();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random IT iban', () => {
    const res = dummy.commerce.iban('IT');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random bic', () => {
    const res = dummy.commerce.bic();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });
});
