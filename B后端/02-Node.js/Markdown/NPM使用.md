# npm文档

## 目录
[-v](#检测npm版本)

## 使用
[检测npm版本](#检测npm版本)

[升级npm版本](#升级npm版本)

[全局安装和本地安装](#全局安装和本地安装)

[下载第三方包](#下载第三方包)

### 检测npm版本
> 可以用来检测是否成功安装npm
```CMD
npm -v
```

### 升级npm版本
> 可以快速升级npm至最新版
```CMD
npm install npm -g
```

### 全局安装和本地安装

+ 方法 
> npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
```CMD
npm install name          # 本地安装
npm install name -g    	  # 全局安装
```
+ 如果出现错误Error: connect ECONNREFUSED 解决办法
```CMD
npm config set proxy null
```

+ 本地安装
> 安装到当前目录
	+ 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录）,如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
	+ 可以通过 require() 来引入本地安装的包。

+ 全局安装
> 安装到Node目录
	+ 将安装包放在 /usr/local 下或者你 node 的安装目录。
	+ 可以直接在命令行里使用。

> by如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link

### 下载第三方包
> 我们可以使用以下命令来下载第三方包.
```CMD
npm install 包名
```
> 后方加@版本号可以下载指定版本
```CMD
npm install name@0.0.1
```

