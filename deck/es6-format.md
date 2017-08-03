# ES6 Import Syntax
### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

:::

### The full list

```js
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
```

:::

### The do no use (IMO)

```js
import "module-name";
```

:::

# ES6 Export Syntax
### [MDN](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export)

:::

### Export named 

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, function
export let name1 = …, name2 = …, …, nameN; // also var, const
```

:::

### Export default

```js
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
```

:::

### Passthrough import as export

```js
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

```js
import * as name from …;
export { name };
```


