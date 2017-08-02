const s = require('shaz');
const crel = require('crel');

module.exports = (title, markdown, opts) => {
  const background = opts && opts.background;
  const titleSlide = s().h1(title);

  if (background.url) {
    titleSlide
      .crel('div', { class: 'cc-image' }, [
        crel('img', { src: background.url })
      ]);
  }

  if (background.author) {
    titleSlide.data('ccAuthor', background.author);
  }

  if (background.source) {
    titleSlide.data('ccSource', background.source);
  }

  return [
    titleSlide,
    s.md(markdown)
  ];
};
