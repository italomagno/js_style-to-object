'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((line) => {
      const [key, value] = line.split(':').map((item) => {
        const trimValue = item.trim();
        const removeSemiColumn = trimValue.split(';').join('');
        const removeLineBreakValue = removeSemiColumn.replace(/\r/g, '');

        return removeLineBreakValue.trimEnd();
      });

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
