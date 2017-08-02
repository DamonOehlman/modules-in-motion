const s = require('shazam/slide');
const fs = require('fs');
const crel = require('crel');

require('shazam')({
  title: 'Typed JS',
  theme: require('bespoke-theme-tweakable')({
    headerFont: 'Josefin Sans',
    displayFont: 'Open Sans'
  }),
  plugins: [
    // require('bespoke-bullets')('pre')
  ],
  styles: [
    fs.readFileSync(__dirname + '/css/icons.css', 'utf8'),
    fs.readFileSync(__dirname + '/css/code.css', 'utf8'),
    fs.readFileSync(__dirname + '/css/deck.css', 'utf8')
  ],
  slides: [
    // s.md(require('./deck/intro.md')),
    require('./deck/intro'),
    require('./deck/history'),
    s.md(require('./deck/es6-format.md')),
    require('./deck/es6-vs-commonjs'),
    require('./deck/tree-shaking'),
    require('./deck/module-resolution-order'),
    require('./deck/future'),
    s.md(require('./deck/fin.md'))
  ]
});
