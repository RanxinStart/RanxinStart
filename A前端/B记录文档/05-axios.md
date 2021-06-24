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

## Http配置

### 1.取出http进行配置

```js
import { default as http } from 'axios'

// 暴露请求方法
export default http
// 暴露请求配置
export const httpConfig = http.defaults
```

### 2.配置请求头

> headers.common中的内容 都是请求头的内容

```js
/** 定义默认请求头 */
http.defaults.headers.common = {
  from: 'shop-h5',
}
```

### 3.配置基础请求地址

> 共同的ip地址 请求链接的前部分

```js
http.defaults.baseURL = 'https://baidu.com/'
```





# Code And Application

> 代码 和 应用场景

---

## 拦截器

### 1.请求拦截器

> 对请求时做一层处理

```js
http.interceptors.request.use((config) => {
    
  return config
})
```

### 2.响应拦截器

> 对得到响应时 做一层处理

```js
http.interceptors.response.use(
    /** 成功响应的请求处理 */
    (response) => {
        return response
    },
    /** 失败响应的请求处理 */
    (error) => {
        return Promise.reject(error)
    }
)
    
```



# Important And Extend

> 扩展内容 以及重点

---

## 常用的系统变量

### 1.环境变量

> 区分生产环境 和   开发环境 

```js
// 使用vite时
import.meta.env.MODE === 'development' //开发环境 

import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
```

