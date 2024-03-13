---
category:
    - Node.js
title: 在 WSL2 中安装 Node.js
permalink: /install-nodejs-on-wsl2
---

::: warning

请首先确保你的 Win10/Win11 电脑安装了 [WSL2](https://docs.microsoft.com/zh-cn/windows/wsl/)，并且安装了 [Ubuntu 20.04](https://www.microsoft.com/store/productId/9N6SVWS3RX71)。

:::

## 1. 安装 NVM

::: tip NVM 介绍

NVM: [Node Version Manager](https://github.com/nvm-sh/nvm)，是一个 Node.js 的版本管理工具，有以下用处：

- 在任意 Linux，macOS 系统上快速简便地下载 Node.js
- 在不同 Node.js 版本之间快速切换

:::

::: danger

NVM 不支持 Windows 系统。

:::

### 1.1. 下载 NVM

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

> 你可以替换 v0.39.1 来使用其他版本的 NVM。

### 1.2. 检查是否安装成功

```bash
$ nvm --version
0.39.1
```

## 2. 使用 NVM

### 2.1. 查看有哪些 Node.js 版本

```bash
$ nvm ls-remote
... 省略
       v16.12.0
       v16.13.0   (LTS: Gallium)
       v16.13.1   (LTS: Gallium)
       v16.13.2   (LTS: Gallium)
       v16.14.0   (Latest LTS: Gallium)
        v17.0.0
        v17.0.1
... 省略
```

### 2.2. 安装你想要的 Node.js 版本

```bash
$ nvm install 16.14.0
```

::: tip 我该选择哪个版本的 Node.js ？

你应该安装 [LTS](http://nodejs.cn/releases) 版本的 Node.js，目前常用的是 14 和 16。

:::

### 2.3. 查看已安装的 Node.js 版本

```bash
$ nvm ls --no-alias
->     v16.14.0
```

### 2.4. 切换到某个 Node.js 版本

```bash
$ nvm use 16.14.0
```

### 2.5. 更多 NVM 用法

[NVM 用法](https://github.com/nvm-sh/nvm#usage)

## 3. 检查 Node.js 是否可用

```bash
$ node -v
v16.14.0
$ npm -v
8.3.1
```
