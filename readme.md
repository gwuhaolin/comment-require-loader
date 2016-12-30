# webpack js loader for require in comment

## install
```bash
npm i comment-require-loader --save-dev
```

## use
**webpack.config.js**
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['comment-require-loader'],
        include: [path.resolve(__dirname, 'node_modules/imui')]
      }
    ]
  }
};
```
**org file**
```js
// @require '../style/index.css'
```
**output file**
```js
require('../style/index.css');
```

实际是这个插件用于在 webpack 构建环境里兼容使用 fis3 输出的带有`// @require '***'` 的文件

