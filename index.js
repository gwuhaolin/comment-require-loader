const replace = require('./replace');

module.exports = function (content) {
    if (this.cacheable) {
        this.cacheable();
    }
    return replace(content);
};