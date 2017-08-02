## Import all the things

```js
import * as _ from 'lodash';
```

```js
const _ = require('lodash');
```

:::

## Import some of the things

```js
import { difference, fill } from 'lodash';
```

```js
const { difference, fill } = require('lodash');
```

:::

## Import the default thing

```js
import { default as difference } from 'lodash/difference';
import difference from 'lodash/difference';
```

```js
const difference = require('lodash/difference');
```
