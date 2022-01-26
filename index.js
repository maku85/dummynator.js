const DataFaker = require('./lib');

const faker = new DataFaker();
faker.locale = 'en';
module.exports = faker;
