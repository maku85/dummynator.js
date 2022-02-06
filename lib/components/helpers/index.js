const BaseComponent = require('../BaseComponent');

module.exports = class HelpersComponent extends BaseComponent {
  constructor(opts = {}) {
    super({ ...opts });
  }

  build(parent) {
    const self = this;

    return {
      /**
       * Parse composed format
       *
       * @param {object} dummy dummy instance
       * @param {string} string string to parse
       */
      parseFormat: (dummy, string) => {
        if (typeof string !== 'string' || !string.length) return '';

        const start = string.search('{{');
        const end = string.search('}}');
        if (start === -1 && end === -1) return string;

        let method = string.substring(start + 2, end);

        let params;
        const regExp = /\(([^)]+)\)/;
        const matches = regExp.exec(method);
        if (matches) {
          method = method.replace(regExp, '');
          const parameters = matches[1];

          try {
            params = JSON.parse(parameters);
          } catch (err) {
            params = parameters;
          }
        }

        const parts = method.split('.');
        if (typeof dummy[parts[0]] === 'undefined') {
          throw new Error(`Invalid module: ${parts[0]}`);
        }
        if (typeof dummy[parts[0]][parts[1]] === 'undefined') {
          throw new Error(`Invalid method: ${parts[0]}.${parts[1]}`);
        }

        const fn = dummy[parts[0]][parts[1]];

        let result;
        if (typeof params === 'string' && !params.length) {
          result = fn.call(this);
        } else {
          result = fn.call(this, params);
        }

        const res = string.replace(`{{${method}}}`, result || '').trim();
        return parent.helpers.parseFormat(dummy, res);
      },
    };
  }
};
