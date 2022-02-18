# Finance

Module to generate internet related data.

## Color

#### Parameters

| Name   | Description  | Default |
| ------ | ------------ | ------- |
| format | color format | `hex`   |

Supported format: `hex` and `rgb`

Generates a random css color code.

#### Usage

```js
dummy.internet.color(); // #923424
dummy.internet.color('rgb'); // [175, 112, 13]
```

## Email

Generates an email address using the given person's name as base.

#### Parameters

| Name      | Description                 | Default |
| --------- | --------------------------- | ------- |
| firstname | first name to use           |         |
| lastname  | last name to use            |         |
| provider  | mail provider domain to use |         |

#### Usage

```js
dummy.internet.email(); // maxime_borer@example.org
dummy.internet.email('John'); // john.batz@example.org
dummy.internet.email('John', 'Doe'); // john_doe@example.com
dummy.internet.email('John', 'Doe', 'google.com'); // john_doe@google.com
```

## IP

Generates a random IP address.

#### Parameters

| Name    | Description         | Default |
| ------- | ------------------- | ------- |
| version | version of protocol | 4       |

Supported version: `4` and `6`

#### Usage

```js
dummy.internet.ip(); // 100.219.204.172
dummy.internet.ip(6); // db5a:7afe:7afb:4d70:6143:3c5d:5edf:4629
```

## File extension

Returns a random file extension.

#### Parameters

| Name | Description  | Default |
| ---- | ------------ | ------- |
| type | type of file |         |

Supported type: `audio`, `application`, `font`, `image`, `text` and `video`

#### Usage

```js
dummy.internet.fileExtension(); // ttf
dummy.internet.fileExtension('image'); // bmp
```

## MIME type

Returns a random MIME type.

#### Parameters

| Name | Description  | Default |
| ---- | ------------ | ------- |
| type | type of mime |         |

Supported type: `audio`, `application`, `font`, `image`, `text` and `video`

#### Usage

```js
dummy.internet.mimeType(); // image/svg+xml
dummy.internet.mimeType('image'); // image/svg+xml
```

## Url

Generates a random url.

#### Parameters

| Name | Description                                           | Default |
| ---- | ----------------------------------------------------- | ------- |
| opts | url options (`protocol`, `subdomain`, `domainSuffix`) |         |

#### Usage

```js
dummy.internet.url(); // https://blake.biz
```

## User agent

Generates a random user agent string.

#### Parameters

| Name | Description                             | Default |
| ---- | --------------------------------------- | ------- |
| opts | url options (`browser`, `os`, `device`) |         |

Supported browser: `chrome`, `firefox`, `internet-explorer-8`, `internet-explorer-9`, `internet-explorer-10`, `internet-explorer-11`, `edge`, `opera` and `safari`

Supported os: `android`, `linux`, `macOS`, `windows-vista`, `windows-xp`, `windows-7`, `windows-8`, and `windows-10`

Supported device: `desktop`, and `mobile`

#### Usage

```js
dummy.internet.userAgent(); // Mozilla/5.0 (Macintosh; Intel Mac OS X 12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.69
dummy.internet.userAgent({ browser: 'firefox' }); // Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/96.0 Mobile/15E148 Safari/605.1.15
dummy.internet.userAgent({ os: 'linux' }); // Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:96.0) Gecko/20100101 Firefox/96.0
dummy.internet.userAgent({ device: 'mobile' }); // Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/96.0 Mobile/15E148 Safari/605.1.15
```

## User name

Generates a username.

#### Parameters

| Name      | Description       | Default |
| --------- | ----------------- | ------- |
| firstname | first name to use |         |
| lastname  | last name to use  |         |

#### Usage

```js
dummy.internet.userName(); // tyrique.schmeler
dummy.internet.userName('John'); // john.weber
dummy.internet.userName('Doe'); // john_doe
```
