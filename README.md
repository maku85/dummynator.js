## Introduction

**Fake Data Generator** is a simple JavaScript tool to generate fake data useful for testing.

<blockquote >This project is still a WIP</blockquote>

### Installation

```bash
npm install fake-data-generator
```

### Usage

```js
const DataFaker = require('fake-data-generator');
const faker = new DataFaker();

const randomName = faker.person.firstName(); // Idella
const randomEmail = faker.internet.email(); // jordane_block@example.com
```

### Documentation

You can find the documentation [here](./DOCUMENTATION.md).

## Issues

Please make sure to read the [Issue Reporting Checklist](./CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Feel free to open an issue if you encounter any issues or would like some new feature to be implemented.

Please make sure to read the [**Contributing Guide**](./CONTRIBUTING.md) before making a pull request.

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
