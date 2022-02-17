const { expect } = require('chai');

const dummy = require('..');

describe('The finance generator', () => {
  it('gives random currency', () => {
    const res = dummy.finance.currency();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('gives random currency code', () => {
    const res = dummy.finance.currencyCode();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.have.lengthOf(3);
  });

  it('gives random currency symbol', () => {
    const res = dummy.finance.currencySymbol();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card type', () => {
    const res = dummy.finance.creditCardType();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card number', () => {
    const res = dummy.finance.creditCardNumber();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random provider credit card number', () => {
    const res = dummy.finance.creditCardNumber('visa');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random credit card CVV', () => {
    const res = dummy.finance.creditCardCVV();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random iban code', () => {
    const res = dummy.finance.iban();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random IT iban', () => {
    const res = dummy.finance.iban('IT');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random bic', () => {
    const res = dummy.finance.bic();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random bitcoin address', () => {
    const res = dummy.finance.bitcoinAddress();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });
});
