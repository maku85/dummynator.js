const BaseComponent = require('../BaseComponent');

module.exports = class ImageComponent extends BaseComponent {
  build(parent) {
    return {
      /**
       * Returns a random image URL
       *
       * @param {mixed} inOpts {width = 640, height = 480, category}
       */
      image: (inOpts = {}) => {
        const categories = [
          'abstract',
          'animals',
          'business',
          'cats',
          'city',
          'food',
          'nightlife',
          'fashion',
          'people',
          'nature',
          'sports',
          'technics',
          'transport',
        ];
        const cat =
          inOpts.category && categories.includes(inOpts.category)
            ? inOpts.category
            : parent.random.arrayElement(categories);
        const url = `http://placeimg.com/${inOpts.width || 640}/${inOpts.height || 480}`;
        return `${url}/${cat}?${parent.random.number()}`;
      },
    };
  }
};
