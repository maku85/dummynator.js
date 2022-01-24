const BaseComponent = require('../BaseComponent');

module.exports = class ImageComponent extends BaseComponent {
  build() {
    return {
      /**
       * Returns a random image URL
       *
       * @param {number} width image width (default: 640)
       * @param {number} height image height (defeault: 480)
       * @param {string} category image category (default: random)
       */
      image: ({ width, height, category } = {}) => {
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
          category && categories.includes(category)
            ? category
            : this.random.arrayElement(categories);
        const url = `http://placeimg.com/${width || 640}/${height || 480}`;
        return `${url}/${cat}?${this.random.number()}`;
      },
    };
  }
};
