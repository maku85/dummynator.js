const { expect } = require('chai');

const dataFaker = require('..');

describe('The person generator', () => {
  it('generates random firstName', () => {
    const res = dataFaker.person.firstName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random male firstName', () => {
    const res = dataFaker.person.firstName('male');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random female firstName', () => {
    const res = dataFaker.person.firstName('female');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random lastName', () => {
    const res = dataFaker.person.lastName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random gender', () => {
    const res = dataFaker.person.gender();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random binary gender', () => {
    const res = dataFaker.person.gender(true);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random non binary gender', () => {
    const res = dataFaker.person.gender(false);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random title', () => {
    const res = dataFaker.person.title();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random male title', () => {
    const res = dataFaker.person.title('male');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random female title', () => {
    const res = dataFaker.person.title('female');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random jobTitle', () => {
    const res = dataFaker.person.jobTitle();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
