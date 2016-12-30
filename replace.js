function replace(source) {
    // replace
    // @require '../style/index.css'
    // to
    // require('../style/index.css');
    return source.replace(/(\/\/ *@require) +(('|").+('|")).*/, 'require($2);');
}

module.exports = replace;