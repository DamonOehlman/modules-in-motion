## Popular Libraries Build Processes

The can I grok it quick challenge.

- Bluebird
  - mostly, custom script under tools/build.js
- jQuery
  - many gulp files, integrating different tools, babel, etc, source code in AMD format... super confused.
- moment.js - yes and very interesting.  Nice [comment](https://github.com/moment/moment#port-to-ecmascript-6-version-2100) re transitioning to ES6 modules.
  - Went from a simple format in [2.9.0](https://github.com/moment/moment/tree/2.9.0) to a ES6 import format from [2.10.2](https://github.com/moment/moment/tree/2.10.2) onwards.  Interesting comparison.
  - uses grunt to orchestrate build
  - "transpilation" through rollup
