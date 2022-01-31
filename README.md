# Base64

A base64 encoder and decoder utility for Node. Use this to easily convert a UTF-8 string to Base64 and back again.

## Installation

```bash
npm i @t-bowersox/base64
```

## Usage

### Encode a UTF-8 string to Base64

```typescript
import { Base64 } from "@t-bowersox/base64";

const base64Str = Base64.encode("hello world");

console.log(base64str); // "aGVsbG8gd29ybGQ="
```

### Decode a Base64 string to UTF-8

```typescript
import { Base64 } from "@t-bowersox/base64";

const utf8Str = Base64.decode("aGVsbG8gd29ybGQ=");

console.log(utf8str); // "hello world"
```
