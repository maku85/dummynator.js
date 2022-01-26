const { expect } = require('chai');

const dataFaker = require('..');

describe('The image generator', () => {
  it('gives random image', () => {
    const res = dataFaker.image.image();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random nature image', () => {
    const res = dataFaker.image.image({ category: 'nature' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
