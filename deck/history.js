const titledContent = require('./lib/titled-content');

module.exports = titledContent('History', require('./history.md'), {
  background: {
    url: 'images/roman-kraft-60298.jpg',
    author: 'Roman Kraft',
    source: 'Unsplash'
  }
});
