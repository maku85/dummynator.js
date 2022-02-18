# Getting Started

Dumminator is a simple tool to generate dummy data useful for testing.

## Installation

Using npm:

```bash
npm install dummynator --save-dev
```

## Usage

```js
const dummy = require('dummynator');

const randomName = dummy.person.firstName(); // Idella
const randomEmail = dummy.internet.email(); // jordane_block@example.com
```
