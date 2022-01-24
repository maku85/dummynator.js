const BaseComponent = require('../BaseComponent');
const locales = require('./locales');

module.exports = class LoremComponent extends BaseComponent {
  constructor() {
    super({ locales });
  }

  build(parent) {
    return {
      /**
       * Returns a random word
       *
       * @param {number} inLength length of the word
       */
      word: (inLength) => {
        const words = inLength
          ? this.definitions.words.filter((word) => word.length === inLength)
          : this.definitions.words;
        return this.random.arrayElement(words);
      },

      /**
       * Returns a list of random words
       *
       * @param {number} inNum number of words (default: 3)
       */
      words: (inNum) => [...new Array(inNum || 3)].map(parent.lorem.word).join(' '),

      /**
       * Returns a sentence of random words
       *
       * @param {number} inWordCount number of words (default: a random number between 3 and 10)
       */
      sentence: (inWordCount) => {
        const sentence = parent.lorem.words(inWordCount || this.random.number({ min: 3, max: 10 }));
        return `${sentence.charAt(0).toUpperCase() + sentence.slice(1)}.`;
      },

      /**
       * Returns a list of sentences of random words
       *
       * @param {number} inSentenceCount number of sentences (default: a random number between 2 and 6)
       * @param {string} inSeparator) sentences separator (default: `' '`)
       */
      sentences: (inSentenceCount, inSeparator) =>
        [...new Array(inSentenceCount || this.random.number({ min: 2, max: 6 }))]
          .map(parent.lorem.sentence)
          .join(inSeparator || ' '),

      /**
       * Returns a paragraph of random sentences
       *
       * @param {number} inSentenceCount number of sentences (default: 3)
       */
      paragraph: (inSentenceCount) =>
        parent.lorem.sentences((inSentenceCount || 3) + this.random.number(3)),

      /**
       * Returns a paragraphs of random sentences
       *
       * @param {number} inParagraphCount numbero of paragraphs (default: 3)
       * @param {string} inSeparator paragraphs separator (default: `'\n \r'`)
       */
      paragraphs: (inParagraphCount, inSeparator) =>
        [...new Array(inParagraphCount || 3)]
          .map(parent.lorem.paragraph)
          .join(inSeparator || '\n \r'),
    };
  }
};
