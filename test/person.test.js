const { expect } = require('chai');

const dummy = require('..');

describe('The person generator', () => {
  it('generates random firstName', () => {
    const res = dummy.person.firstName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random male firstName', () => {
    const res = dummy.person.firstName('male');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random female firstName', () => {
    const res = dummy.person.firstName('female');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random lastName', () => {
    const res = dummy.person.lastName();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random gender', () => {
    const res = dummy.person.gender();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random binary gender', () => {
    const res = dummy.person.gender(true);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('gives random non binary gender', () => {
    const res = dummy.person.gender(false);
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random title', () => {
    const res = dummy.person.title();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random male title', () => {
    const res = dummy.person.title('male');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random female title', () => {
    const res = dummy.person.title('female');
    console.log({ res });
    expect(res).to.be.not.undefined;
  });

  it('generates random jobTitle', () => {
    const res = dummy.person.jobTitle();
    console.log({ res });
    expect(res).to.be.not.undefined;
  });
});
