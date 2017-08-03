const s = require('./');
const crel = require('crel');

module.exports = [
  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/samuel-zeller-158996.jpg' })
    ])
    .h1('The Future')
    .data('ccSource', 'Unsplash')
    .data('ccAuthor', 'Samuel Zeller'),
  s.md(require('./future.md')),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/annie-spratt-96529.jpg' })
    ])
    .h1('Surprise !!!!')
    .data('ccSource', 'Unsplash')
    .data('ccAuthor', 'Annie Spratt'),

  s.md(require('./start-using-now.md')),

  s()
    .ul([
      'Safari 10.1',
      'Edge 15 (Flagged)',
      [ 'Firefox 54 (Flagged)', crel('img', { src: 'images/es6-modules-enable-firefox.png' }) ],
      [ 'Chrome 60 (Flagged)', crel('img', { src: 'images/es6-modules-enable-chrome.png' }) ]
    ]),

  s.md(require('./test-results.md')),

  s()
    .crel('div', { class: 'cc-image' }, [
      crel('img', { src: 'images/nuno-silva-33238.jpg' })
    ])
    .h1('Where is this leading?')
    .data('ccSource', 'Unsplash')
    .data('ccAuthor', 'Nuno Silva') 
];
