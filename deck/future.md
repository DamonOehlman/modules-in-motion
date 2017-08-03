## `import()` - Stage 3

```js
import(`plugins/${pluginName}.js`).then(plugin => {
  plugin.doTheThing();
});
```

```js
Promise.all([
  import('./plugins/a.js'),
  import('./plugins/b.js')
]).then(([a, b]) => {
  // do things with a and b
});
```
