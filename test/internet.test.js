const { expect } = require('chai');

const dummy = require('..');

describe('The internet generator', () => {
  it('generates random email', () => {
    const res = dummy.internet.email();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userName', () => {
    const res = dummy.internet.userName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random url', () => {
    const res = dummy.internet.url();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random ip', () => {
    const res = dummy.internet.ip();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random ipv6', () => {
    const res = dummy.internet.ip(6);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userAgent', () => {
    const res = dummy.internet.userAgent();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userAgent by browser', () => {
    const res = dummy.internet.userAgent({ browser: 'firefox' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userAgent by os', () => {
    const res = dummy.internet.userAgent({ os: 'linux' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random userAgent by device', () => {
    const res = dummy.internet.userAgent({ device: 'mobile' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random mimeType', () => {
    const res = dummy.internet.mimeType();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random image mimeType', () => {
    const res = dummy.internet.mimeType('image');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random fileExtension', () => {
    const res = dummy.internet.fileExtension();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random image fileExtension', () => {
    const res = dummy.internet.fileExtension('image');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random hex color', () => {
    const res = dummy.internet.color();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random rgb color', () => {
    const res = dummy.internet.color('rgb');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
