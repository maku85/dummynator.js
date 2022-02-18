# Date

Module to generate dates.

## Between

Returns a random date between other two dates.

#### Parameters

| Name | Description | Default |
| ---- | ----------- | ------- |
| from | early date  |         |
| to   | late date   |         |

#### Usage

```js
dummy.date.between('2000-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z'); // 2012-08-19T17:27:12.741Z
```

## Future

Returns a random date in the future.

#### Parameters

| Name    | Description                    | Default |
| ------- | ------------------------------ | ------- |
| years   | max number of past year        | 1       |
| refDate | date to use as reference point |         |

#### Usage

```js
dummy.date.future(); // 2025-03-10T21:03:03.277Z
dummy.date.future(5); // 2027-01-21T14:51:42.090Z
dummy.date.future(5, '2030-02-21T14:28:12.236Z'); // 2033-05-04T22:42:57.684Z
```

## Month

Returns a random name of a month.

#### Parameters

| Name | Description           | Default |
| ---- | --------------------- | ------- |
| abbr | abbreviated name flag | false   |

#### Usage

```js
dummy.date.month(); // October
dummy.date.month(true); // Oct
```

## Past

Returns a random date in the past.

#### Parameters

| Name    | Description                    | Default |
| ------- | ------------------------------ | ------- |
| years   | max number of past year        | 1       |
| refDate | date to use as reference point |         |

#### Usage

```js
dummy.date.past(); // 2021-07-06T09:59:55.812Z
dummy.date.past(5); // 2020-02-22T19:58:18.435Z
dummy.date.past(5, '2000-02-21T14:28:12.236Z'); // 1996-08-12T14:57:14.570Z
```

## Weekday

Returns a random day of the week.

#### Parameters

| Name | Description           | Default |
| ---- | --------------------- | ------- |
| abbr | abbreviated name flag | false   |

#### Usage

```js
dummy.date.weekday(); // Saturday
dummy.date.weekday(true); // Sat.
```
