Assuming we wanted to call the lodash `difference` function, e.g.

```js
console.log(difference([1, 2, 3], [2]));
// => [1, 3]
```

In the form:

```js
import { difference } from 'lodash';

console.log(difference([1, 2, 3], [2]));
```

```
👤  damo $ rollup -c && cat bundle.js | uglifyjs | gzip | wc -c
    35382
```

Now:

```js
import difference from 'lodash/difference';

console.log(difference([1, 2, 3], [2]));
```

```
👤  damo $ rollup -c && cat bundle.js | uglifyjs | gzip | wc -c
    3964
```

