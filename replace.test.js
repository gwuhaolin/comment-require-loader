const assert = require('assert');
const replace = require('./replace');

describe('replace', () => {

    it('ok', () => {

        assert.equal(
            replace(`// @require '../style/index.css'`),
            `require('../style/index.css');`
        );

        assert.equal(
            replace(`
var _classnames2 = require('classnames');
// @require '../style/index.css'
`),
            `
var _classnames2 = require('classnames');
require('../style/index.css');
`
        );
    })
});