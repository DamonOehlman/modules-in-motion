const titledContent = require('./lib/titled-content');

module.exports = titledContent('Modules in Motion', require('./intro.md'), {
  background: {
    url: 'images/jc-dela-cuesta-304544.jpg',
    author: 'JC Dela Cuesta',
    source: 'Unsplash'
  }
});
