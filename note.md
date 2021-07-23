## 步骤

- 1.新建一个文件夹
- 2.进入文件 使用 `lerna init` 初始化项目
- 3.在 package.json 文件中添加代码
  ```json
    "workspaces": [
      "packages/*"
    ],
  ```
- 4.在 lerna.json 文件中添加代码
  ```json
    "npmClient": "yarn",
    "useWorkspaces": true,
  ```
- 5.添加基础依赖
  ```json
    "devDependencies": {
      "@babel/core": "^7.14.6",
      "@babel/plugin-transform-runtime": "^7.14.5",
      "@babel/preset-env": "^7.14.7",
      "@babel/preset-typescript": "^7.14.5",
      "@types/webpack-env": "^1.16.0",
      "@vue/compiler-sfc": "^3.1.2",
      "babel-loader": "^8.2.2",
      "cross-env": "^7.0.3",
      "css-loader": "^5.2.6",
      "html-webpack-plugin": "^5.3.2",
      "lerna": "^4.0.0",
      "sass": "^1.35.1",
      "sass-loader": "^12.1.0",
      "style-loader": "^3.0.0",
      "vue-loader": "^16.1.2",
      "vue-template-compiler": "^2.6.14",
      "webpack": "^5.40.0",
      "webpack-cli": "^4.7.2",
      "webpack-dev-server": "^3.11.2"
    },
    "dependencies": {
      "vue": "^3.1.2"
    }
  ```
- 6.添加 babel 配置文件 `babel.config.js`
  ```javascript
  module.exports = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-typescript',
        {
          allExtensions: true, // 支持所有文件扩展名 (.vue)
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  }
  ```
- 7.执行`yarn install`安装依赖
- 8.添加一个包 `lerna create wmview`
- 9.进入包文件夹 使用 `yarn install` 将包链接至 node_modules 可以去node_modules中查看是否链接成功
- 10.在目标文件中引入使用

## rollup打包依赖模块
  - `rollup`: 打包工具
  - `rollup-plugin-vue`
  - `typescript`: 
  - `rollup-plugin-typescript2`

## 说明
  - package.json文件
    - main: 包的入口文件
    - files: npm发布的文件