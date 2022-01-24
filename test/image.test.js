const { expect } = require('chai');

const DataFaker = require('../lib');

const faker = new DataFaker();

describe('The faker image generator', () => {
  it('gives random image', () => {
    const res = faker.image.image();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random nature image', () => {
    const res = faker.image.image({ category: 'nature' });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
