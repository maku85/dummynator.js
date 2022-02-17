## Documentation

### Localization

The library supports localizations. You can set the locale code in constructor.

```js
// Use default (English) localization
console.log(dummy.person.firstName()); // Idella
```

```js
// Use german
dummy.locale = 'de';
console.log(dummy.person.firstName()); // Andreas
```

#### Available localizations:

| Code    | Language/Country  |
| ------- | ----------------- |
| default | English (default) |
| de      | German            |
| es      | Spanish           |
| fr      | French            |
| it      | Italian           |

## Generators

Use this functions to generate fake random data

### Person

| Function                         | Description                           | Sample result           |
| -------------------------------- | ------------------------------------- | ----------------------- |
| `dummy.person.firstName()`       | Generate a first name                 | "Daija"                 |
| `dummy.person.firstName(gender)` | Generate a specific gender first name | Gender first name       |
| `dummy.person.gender()`          | Give a non-binary gender              | "Neither"               |
| `dummy.person.gender(true)`      | Give a binary gender                  | "Female"                |
| `dummy.person.jobTitle()`        | Generate a job title                  | "Future Identity Agent" |
| `dummy.person.lastName()`        | Generate a last name                  | "Graham"                |
| `dummy.person.title()`           | Generate a title                      | "Dr."                   |
| `dummy.person.title(gender)`     | Generate a specific gender title      | Gender titlte           |

### Location

| Function                          | Description                | Sample result            |
| --------------------------------- | -------------------------- | ------------------------ |
| `dummy.location.buildingNumber()` | Generate a building number | "196"                    |
| `dummy.location.city()`           | Generate a city name       | "Green Bay"              |
| `dummy.location.country()`        | Give a country name        | "Norway"                 |
| `dummy.location.countryCode()`    | Give a country code        | "ET"                     |
| `dummy.location.county()`         | Give a county name         | "Cambridgeshire"         |
| `dummy.location.state()`          | Give a state               | "California"             |
| `dummy.location.stateAbbr()`      | Give a state abbreviation  | "WA"                     |
| `dummy.location.streetAddress()`  | Generate a street address  | "880 Bogan"              |
| `dummy.location.streetName()`     | Generate a street name     | "Hessel"                 |
| `dummy.location.phone()`          | Generate a phone number    | "(587) 1027-5746 x16466" |
| `dummy.location.postCode()`       | Generate a post code       | "84411-8537"             |
| `dummy.location.timeZone()`       | Give a timeZone            | "America/Bogota"         |

### Company

| Function                      | Description             | Sample result                    |
| ----------------------------- | ----------------------- | -------------------------------- |
| `dummy.company.name()`        | Generate a company name | "Bayer Fay Inc"                  |
| `dummy.company.catchPhrase()` | Generate a catch phrase | "Mandatory static orchestration" |
| `dummy.company.department()`  | Give a shop department  | "Beauty"                         |

### Internet data

| Function                                 | Description                                                                                                                                                                       | Sample result                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `dummy.internet.email()`                 | Generate an email address                                                                                                                                                         | "jerel_feeney@example.net"                                                                                                            |
| `dummy.internet.url()`                   | Generate an url                                                                                                                                                                   | "http://alice.org"                                                                                                                    |
| `dummy.internet.userName()`              | Generate a username                                                                                                                                                               | "simone.dooley"                                                                                                                       |
| `dummy.internet.ip()`                    | Generate a IPv4 address                                                                                                                                                           | "31.57.31.113"                                                                                                                        |
| `dummy.internet.ip(6)`                   | Generate a IPv6 address                                                                                                                                                           | "4374:2f4d:baf8:2c0f:0dba:f6f0:c164:b05a"                                                                                             |
| `dummy.internet.userAgent()`             | Give a user agent                                                                                                                                                                 | "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 OPR/83.0.4254.16" |
| `dummy.internet.userAgent({ broswer})`   | Give a browser specific user agent [`chrome`, `firefox`, `safari`, `internet-explorer-8`, `internet-explorer-9`, `internet-explorer-10`, `internet-explorer-11`, `edge`, `opera`] | "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0"                                                        |
| `dummy.internet.userAgent({ os})`        | Give a os specific user agent [`linux`, `macOS`, `windows-10`, `windows-9`, `windows-8`, `windows-8.1`, `windows-7`, `windows-vista`, `windows-xp`, `android`]                    | "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:96.0) Gecko/20100101 Firefox/96.0"                                                          |
| `dummy.internet.userAgent({ device})`    | Give a device specific user agent [`mobile`, `desktop`]                                                                                                                           | "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.98 Mobile Safari/537.36"                     |
| `dummy.internet.mimeType()`              | Give a MIME type                                                                                                                                                                  | "application/vnd.oasis.opendocument.spreadsheet"                                                                                      |
| `dummy.internet.mimeType(type)`          | Give a specific MIME type                                                                                                                                                         | "image/svg+xml"                                                                                                                       |
| `dummy.internet.fileExtension()`         | Give a file extension                                                                                                                                                             | "epub"                                                                                                                                |
| `dummy.internet.fileExtension(fileType)` | Give a specific file type extension                                                                                                                                               | "jpeg"                                                                                                                                |
| `dummy.internet.color()`                 | Generate a hex color                                                                                                                                                              | "#e3509d"                                                                                                                             |
| `dummy.internet.color('rgb')`            | Generate a RGB color                                                                                                                                                              | [ 254, 248, 147 ]                                                                                                                     |

### Lorem

| Function                   | Description               | Sample result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dummy.lorem.word()`       | Give a lorem word         | "facere"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `dummy.lorem.words()`      | Give lorem words          | "ut iste ratione"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `dummy.lorem.sentence()`   | Generate a lorem sentence | "Voluptatibus quas officiis debitis facere maxime harum velit perferendis est hic."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dummy.lorem.sentences()`  | Generate lorem sentences  | "Nemo ex reiciendis consequatur modi officia. Et molestiae eos veritatis exercitationem veniam modi dignissimos voluptatem. Quidem exercitationem ut aut incidunt sapiente ipsum voluptatem tempora ut deleniti nihil. Sit maxime nesciunt sunt possimus quis. Maiores eos quia molestiae est sed asperiores alias corporis non fugit. Qui est ut rem atque id. Fugiat quaerat quam enim autem illum et quia."                                                                                                                                                                                                                                                                                                                                                                                                             |
| `dummy.lorem.paragraph()`  | Give a lorem paragraph    | "Aut ut beatae repellat suscipit a et. Sunt consequatur quia in aliquid debitis et non rerum aut. Omnis impedit natus quia nesciunt sint quasi quisquam ipsum."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `dummy.lorem.paragraphs()` | Give lorem paragraphs     | "Beatae voluptas natus iure odio mollitia perferendis quia est. Odio et recusandae officiis rerum at est quam soluta. Voluptates laudantium eveniet illo odit vel ea porro delectus dignissimos ducimus. Ab est optio delectus et deserunt dolorum et aut sed et. Aut temporibus perspiciatis quae quae magnam numquam sapiente ut quasi explicabo itaque. Veniam quam non ipsa voluptas qui voluptas a sint nulla. Omnis possimus qui nobis minima debitis assumenda vel consequatur similique facilis et. Vel eius ut quas nobis esse non perspiciatis. Soluta beatae qui delectus porro deserunt. Modi dignissimos et enim laboriosam ut fugit debitis dolor eaque sit. Deserunt facilis iusto distinctio quaerat consequuntur aut rerum. Doloribus commodi quia natus autem ab. Inventore distinctio aut eos optio et' |

### Date & time

| Function                            | Description                       | Sample result |
| ----------------------------------- | --------------------------------- | ------------- |
| `dummy.date.between(from, to)`      | Generate a date between two dates | Date          |
| `dummy.date.future(years, refDate)` | Generate a date in the future     | Date          |
| `dummy.date.month()`                | Give a month name                 | "September"   |
| `dummy.date.past(years, refDate)`   | Generate a date in the past       | Date          |
| `dummy.date.weekday()`              | Give a weekday name               | "Sunday"      |

### Random

| Function                                   | Description                 | Sample result |
| ------------------------------------------ | --------------------------- | ------------- |
| `dummy.random.number()`                    | Generate a random number    | Number        |
| `dummy.random.boolean()`                   | Generate a random booleam   | Boolean       |
| `dummy.random.arrayElement(array)`         | Give a random array element | Array element |
| `dummy.random.objectElement(object)`       | Give a random object value  | Object value  |
| `dummy.random.objectElement(object, 'key)` | Give a random object key    | Object key    |
