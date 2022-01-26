const { expect } = require('chai');

const dummy = require('..');

describe('The image generator', () => {
  it('gives random image', () => {
    const res = dummy.image.image();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random nature image', () => {
    const res = dummy.image.image({ category: 'nature' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
