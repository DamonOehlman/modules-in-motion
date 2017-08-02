const titledContent = require('./lib/titled-content');

module.exports = titledContent('ES6 vs CommonJS', require('./es6-vs-commonjs.md'), {
  background: {
    url: 'images/cecilia-par-102886.jpg',
    author: 'Cecilia Par',
    source: 'Unsplash'
  }
});
