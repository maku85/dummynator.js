# Finance

Module to generate finance related data.

## Bic

Generates a random bic.

#### Usage

```js
dummy.finance.bic(); // VDQUMXF1331
```

## Bitcoin address

Generates a random bitcoin address.

#### Usage

```js
dummy.finance.bitcoinAddress(); // 3kGXKCHVyPPk5PuEPfTcFPRZKNE2XN3w2R8TCd3fVhUSQ7kUjHjZR3asn
```

## Credit card type

Returns a random credit card type.

#### Usage

```js
dummy.finance.creditCardType(); // switch
```

## Credit card CVV

Generates a random credit card CVV.

#### Usage

```js
dummy.finance.creditCardCVV(); // 754
```

## Credit card number

Generates a random credit card number.

#### Parameters

| Name     | Description                      | Default |
| -------- | -------------------------------- | ------- |
| provider | name of the credit card provider |         |

Supported provider: `american_express`, `diners_club`, `insapayment`, `jcb`, `laser`, `maestro`, `mastercard`, `solo`, `switch`, `visa`

#### Usage

```js
dummy.finance.creditCardNumber(); // 3443-264688-58707
dummy.finance.creditCardNumber('visa'); // 4743-4328-0066-2370
```

## Currency

Returns a random currency name.

#### Usage

```js
dummy.finance.currency(); // Macedonian denar
```

## Currency code

Returns a random currency code.

#### Usage

```js
dummy.finance.currencyCode(); // GIP
```

## Currency symbol

Returns a random currency symbol.

#### Usage

```js
dummy.finance.currencySymbol(); // Ar
```

## IBAN

Generates a random iban.

#### Parameters

| Name        | Description                                          | Default |
| ----------- | ---------------------------------------------------- | ------- |
| countryCode | country code from which you want to generate an IBAN |         |

#### Usage

```js
dummy.finance.iban(); // IE18SN6A87276400027048
dummy.finance.iban('IT'); // IT66J00800601520O680S15G356
```
