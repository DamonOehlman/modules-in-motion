## Compare the following:

```js
// import a specific export from the lodash module
import { difference } from 'lodash';

// import a the default export from a specific lodash submodule
import difference from 'lodash/difference';
```

#### They look like they do about the same thing right?

:::

## Not from a tree shaking perspective

```js
import { difference } from 'lodash';
```

`24.05kB`

```js
import difference from 'lodash/difference';
```

`2.46kB`

:::

## What about lodash-es?

```js
import { difference } from 'lodash-es';
```

`27.15kB`

```js
import difference from 'lodash-es/difference';
```

`2.45kB`

:::

## When it's my own modules?

- It's _usually_ much better.
- rollup.js seems smarter than webpack.

:::

#### Case 1: Direct imports of functions from the customers API.

```js
import { getCustomerData, updateCustomerData } from './api/customers.js';
```

_Both correctly shake out `deleteCustomerData`._

#### Case 2: Aggregation of the customers API through an `api.js` module

```js
// main.js
import { customers } from './api.js';

// api.js
import * as customers from './api/customers.js';
export { customers };
```

_Only rollup.js removes `deleteCustomerData`_
