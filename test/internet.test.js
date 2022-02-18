const { expect } = require('chai');

const dummy = require('..');

describe('The internet generator', () => {
  it('generates random email', () => {
    const res = dummy.internet.email();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random email with provided first name', () => {
    const res = dummy.internet.email('John');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random email with provided first name and last name', () => {
    const res = dummy.internet.email('John', 'Doe');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random email with provided first name, last name and provider', () => {
    const res = dummy.internet.email('John', 'Doe', 'google.com');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userName', () => {
    const res = dummy.internet.userName();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userName with provided first name', () => {
    const res = dummy.internet.userName('John');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userName with provided first name and last name', () => {
    const res = dummy.internet.userName('John', 'Doe');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random url', () => {
    const res = dummy.internet.url();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random ip', () => {
    const res = dummy.internet.ip();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res.split('.')).to.have.lengthOf(4);
  });

  it('generates random ipv6', () => {
    const res = dummy.internet.ip(6);
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res.split(':')).to.have.lengthOf(8);
  });

  it('generates random userAgent', () => {
    const res = dummy.internet.userAgent();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userAgent by browser', () => {
    const res = dummy.internet.userAgent({ browser: 'firefox' });
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userAgent by os', () => {
    const res = dummy.internet.userAgent({ os: 'linux' });
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random userAgent by device', () => {
    const res = dummy.internet.userAgent({ device: 'mobile' });
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random mimeType', () => {
    const res = dummy.internet.mimeType();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random image mimeType', () => {
    const res = dummy.internet.mimeType('image');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.contains('image');
  });

  it('generates random fileExtension', () => {
    const res = dummy.internet.fileExtension();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random image fileExtension', () => {
    const res = dummy.internet.fileExtension('image');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
  });

  it('generates random hex color', () => {
    const res = dummy.internet.color();
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.contains('#');
    expect(res).to.have.lengthOf(7);
  });

  it('generates random rgb color', () => {
    const res = dummy.internet.color('rgb');
    console.log({ res });
    expect(res).to.be.not.undefined;
    expect(res).to.be.not.null;
    expect(res).to.be.not.empty;
    expect(res).to.have.lengthOf(3);
  });
});
