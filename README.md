# Fake data generator

[![npm version](https://img.shields.io/npm/v/fake-data-generator.svg?style=flat-square)](https://www.npmjs.org/package/fake-data-generator) [![npm downloads](https://img.shields.io/npm/dm/fake-data-generator.svg?style=flat-square)](http://npm-stat.com/charts.html?package=fake-data-generator)

Simple JavaScript tool to generate fake data useful for testing.

<blockquote >This project is still a WIP</blockquote>

### Installation

Using npm:

```bash
npm install fake-data-generator
```

### Usage

```js
const dataFaker = require('fake-data-generator');

const randomName = dataFaker.person.firstName(); // Idella
const randomEmail = dataFaker.internet.email(); // jordane_block@example.com
```

### Documentation

You can find the documentation [here](./DOCUMENTATION.md).

## Issues

Please make sure to read the [Issue Reporting Checklist](./CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Feel free to open an issue if you encounter any issues or would like some new feature to be implemented.

Please make sure to read the [**Contributing Guide**](./CONTRIBUTING.md) before making a pull request.

## License

This project is [MIT licensed](./LICENSE).
