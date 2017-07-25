Assuming we wanted to call the lodash `difference` function, e.g.

```js
console.log(difference([1, 2, 3], [2]));
// => [1, 3]
```

## Rollup Samples

### ES6 selective import

```js
import { difference } from 'lodash';

console.log(difference([1, 2, 3], [2]));
```

```
$ rollup -c
$ babili < bundle.js | gzip | wc -c
  24632
```

### ES6 selective import (manual)

```js
import difference from 'lodash/difference';

console.log(difference([1, 2, 3], [2]));
```

```
$ rollup -c
$ babili < bundle.js | gzip | wc -c
  2527
```

## Browserify Samples

### CommonJS selective import

```js
const { difference } = require('lodash');

console.log(difference([1, 2, 3], [2]));
```

```
$ browserify src/main.js -o bundle.js
$ babili < bundle.js | gzip | wc -c
  24878
```

### CommonJS selective import (manual)

```js
const difference = require('lodash/difference');

console.log(difference([1, 2, 3], [2]));
```

```
$ browserify src/main.js -o bundle.js
$ babili < bundle.js | gzip | wc -c
  3884
```

## Comparison Table

|            | Selective | Selective (manual) |
|------------|----------:|-------------------:|
| Browserify |     24878 |               3884 |
| Rollup     |     24632 |               2527 |
| % Saved    |       ~1% |               ~35% |
