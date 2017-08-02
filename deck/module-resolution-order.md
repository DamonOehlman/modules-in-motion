Given the following source code, what would the output be:

#### `main.js`
<<< ../experiments/module-resolution-contrived/src/main.js

#### `logger.js`
<<< ../experiments/module-resolution-contrived/src/logger.js

:::

Well, here it is:

#### ES6 Module Resolution Order

```
> logger initialized
> starting main
> hi
```

#### "Inline Execution" Resolution Order

```
> starting main
> logger initialized
> hi
```
