## Documentation

### Localization

The library supports localizations. You can set the locale code in constructor.

```js
// Use default (English) localization
const faker = new DataFaker();
console.log(faker.person.firstName()); // Idella
```

```js
// Use german
const faker = new DataFaker({ locale: 'de' });
console.log(faker.person.firstName()); // Andreas
```

#### Available localizations:

| Code    | Language/Country  | Usage                      |
| ------- | ----------------- | -------------------------- |
| default | English (default) | `faker();`                 |
| de      | German            | `faker({ locale: "de" });` |
| es      | Spanish           | `faker({ locale: "es" });` |
| fr      | French            | `faker({ locale: "fr" });` |
| it      | Italian           | `faker({ locale: "it" });` |

## Generators

Use this functions to generate fake random data

### Person

| Function                           | Description                  | Sample result           |
| ---------------------------------- | ---------------------------- | ----------------------- |
| `faker.person.firstName()`         | Generate a first name        | "Daija"                 |
| `faker.person.firstName('female')` | Generate a female first name | "Angel"                 |
| `faker.person.firstName('male')`   | Generate a male first name   | "Dwayne"                |
| `faker.person.gender()`            | Give a non-binary gender     | "Neither"               |
| `faker.person.gender(true)`        | Give a binary gender         | "Female"                |
| `faker.person.jobTitle()`          | Generate a job title         | "Future Identity Agent" |
| `faker.person.lastName()`          | Generate a last name         | "Graham"                |
| `faker.person.title()`             | Generate a title             | "Dr."                   |
| `faker.person.title('female')`     | Generate a female title      | "Miss"                  |
| `faker.person.title('male')`       | Generate a male title        | "Ms."                   |

### Location

| Function                          | Description                | Sample result            |
| --------------------------------- | -------------------------- | ------------------------ |
| `faker.location.buildingNumber()` | Generate a building number | "196"                    |
| `faker.location.city()`           | Generate a city name       | "Green Bay"              |
| `faker.location.country()`        | Give a country name        | "Norway"                 |
| `faker.location.countryCode()`    | Give a country code        | "ET"                     |
| `faker.location.county()`         | Give a county name         | "Cambridgeshire"         |
| `faker.location.state()`          | Give a state               | "California"             |
| `faker.location.stateAbbr()`      | Give a state abbreviation  | "WA"                     |
| `faker.location.streetAddress()`  | Generate a street address  | "880 Bogan"              |
| `faker.location.streetName()`     | Generate a street name     | "Hessel"                 |
| `faker.location.phone()`          | Generate a phone number    | "(587) 1027-5746 x16466" |
| `faker.location.postCode()`       | Generate a post code       | "84411-8537"             |
| `faker.location.timeZone()`       | Give a timeZone            | "America/Bogota"         |

### Company

| Function                      | Description             | Sample result                    |
| ----------------------------- | ----------------------- | -------------------------------- |
| `faker.company.name()`        | Generate a company name | "Bayer Fay Inc"                  |
| `faker.company.catchPhrase()` | Generate a catch phrase | "Mandatory static orchestration" |

### Internet data

| Function                    | Description               | Sample result              |
| --------------------------- | ------------------------- | -------------------------- |
| `faker.internet.email()`    | Generate an email address | "jerel_feeney@example.net" |
| `faker.internet.url()`      | Generate an url           | "http://alice.org"         |
| `faker.internet.userName()` | Generate a username       | "simone.dooley"            |

### Lorem

| Function                   | Description               | Sample result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `faker.lorem.word()`       | Give a lorem word         | "facere"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `faker.lorem.words()`      | Give lorem words          | "ut iste ratione"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `faker.lorem.sentence()`   | Generate a lorem sentence | "Voluptatibus quas officiis debitis facere maxime harum velit perferendis est hic."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `faker.lorem.sentences()`  | Generate lorem sentences  | "Nemo ex reiciendis consequatur modi officia. Et molestiae eos veritatis exercitationem veniam modi dignissimos voluptatem. Quidem exercitationem ut aut incidunt sapiente ipsum voluptatem tempora ut deleniti nihil. Sit maxime nesciunt sunt possimus quis. Maiores eos quia molestiae est sed asperiores alias corporis non fugit. Qui est ut rem atque id. Fugiat quaerat quam enim autem illum et quia."                                                                                                                                                                                                                                                                                                                                                                                                             |
| `faker.lorem.paragraph()`  | Give a lorem paragraph    | "Aut ut beatae repellat suscipit a et. Sunt consequatur quia in aliquid debitis et non rerum aut. Omnis impedit natus quia nesciunt sint quasi quisquam ipsum."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `faker.lorem.paragraphs()` | Give lorem paragraphs     | "Beatae voluptas natus iure odio mollitia perferendis quia est. Odio et recusandae officiis rerum at est quam soluta. Voluptates laudantium eveniet illo odit vel ea porro delectus dignissimos ducimus. Ab est optio delectus et deserunt dolorum et aut sed et. Aut temporibus perspiciatis quae quae magnam numquam sapiente ut quasi explicabo itaque. Veniam quam non ipsa voluptas qui voluptas a sint nulla. Omnis possimus qui nobis minima debitis assumenda vel consequatur similique facilis et. Vel eius ut quas nobis esse non perspiciatis. Soluta beatae qui delectus porro deserunt. Modi dignissimos et enim laboriosam ut fugit debitis dolor eaque sit. Deserunt facilis iusto distinctio quaerat consequuntur aut rerum. Doloribus commodi quia natus autem ab. Inventore distinctio aut eos optio et' |

### Date & time

| Function                            | Description                       | Sample result |
| ----------------------------------- | --------------------------------- | ------------- |
| `faker.date.between(from, to)`      | Generate a date between two dates | Date          |
| `faker.date.future(years, refDate)` | Generate a date in the future     | Date          |
| `faker.date.month()`                | Give a month name                 | "September"   |
| `faker.date.past(years, refDate)`   | Generate a date in the past       | Date          |
| `faker.date.weekday()`              | Give a weekday name               | "Sunday"      |
