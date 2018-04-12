# is-node-maintained

Checks if a given Node.js version is still maintained.

## Installation

```sh
npm install is-node-maintained --save
```

## Usage

```js
const isNodeMaintained = require('is-node-maintained');

console.log(isNodeMaintained('8.1'));
```

Outputs:

```
true
```

You can pass any valid semver-range. If the range includes any unmaintained version of Node.js, it will return `false`.

## License

MIT
