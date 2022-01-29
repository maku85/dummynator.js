const { expect } = require('chai');

const dummy = require('..');

describe('The random generator', () => {
  it('generates a random number', () => {
    const res = dummy.random.number();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates a random number with a given max value', () => {
    const res = dummy.random.number(10);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates a random boolean', () => {
    const res = dummy.random.boolean();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('givens a random array value', () => {
    const res = dummy.random.arrayElement(['a', 'b', 'c']);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('givens a random object element value', () => {
    const res = dummy.random.objectElement({ a: 1, b: 2, c: 3 });
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('givens a random object element key', () => {
    const res = dummy.random.objectElement({ a: 1, b: 2, c: 3 }, 'key');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
