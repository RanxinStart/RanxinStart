---
title: 这里是标题
date: 现在的时间
categories:
  - 划分的文件夹
tags: 
  - 标签

---

# Build And Config

> 如何搭建安装以及全部配置项

---
## 初始化一个插件

​	`vuepress`的config的插件使用plugin的方式有很多,但通常情况下使用plugins:{"xxx-plugin":{ config }}只会扫描识别`node_modules`依赖包里面的plugin的包,而在开发时却不同。	

> 官方指示 使用函数的形式来添加 本体插件

```js
plugins: [
    [
      (pluginOptions, context) => ({
        name: 'vuepress-plugin-xxx'
        // 注意 在此处打印log和document操作并不会执行 因为这里是CommonJs
      }),{ /** 插件配置（传入的参数） */ }
    ]
]
```

> 开发插件时，需要将plugin和config分开开发 所以

```js
plugins: [
    [
      require('dir/vuepress-plugin-typing'),
      { /** 插件配置（传入的参数） */ }
    ]
]

```

### 1.同项目写插件目录

### 2.分项目写插件目录

### 3.配置插件基础

#### 1.初始化一个package.json

> 防止出现意料之为的情况，请将package配置的name和文件夹相同

```bash
# 使用yarn或npm
$ yarn init
$ npm init
```

#### 2.初始化一个npm包

```bash
# 初始化
$ npm init
# 上传
$ npm pub
```

#### 3.客户端脚本路径

```js
// index.js
const path = require('path');
module.exports = {
    name: 'vuepress-plugin-typing',
    enhanceAppFiles:[
        // 客户端脚本路径 可配置多个
        path.resolve(__dirname, 'lib/enhanceApp.js'),
    ],
}
```

#### 4.派发配置数据

> 将插件配置 给客户端使用

```js
// index.js
const path = require('path');
module.exports = (pluginOptions, context) => ({
    define: {
        // 定义全局变量 = 配置信息
        GLOBAL_PLUGIN_NAME_OPTION: pluginOptions,
    },
    name: 'vuepress-plugin-typing',
    enhanceAppFiles:[
        path.resolve(__dirname, 'lib/enhanceApp.js'),
    ],
})
```

#### 5.接收派发数据

> 将数据在客户端做操作或显示

```js
// enhanceApp.js

/** define 配置之后 拿取变量 */
const options = GLOBAL_PLUGIN_TYPED_OPTION

export default () => {
    // 将配置打印到浏览器
    console.log(options)
}
```



---

# Code And Application

> 代码 和 应用场景

---


---

# Important And Extend

> 扩展内容 以及重点
