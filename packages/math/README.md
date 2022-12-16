<p align="center">
<a href="https://github.com/mpx-ecology/mpxuse#gh-light-mode-only">
  <img src="https://raw.githubusercontent.com/mpx-ecology/mpxuse/main/packages/public/logo-vertical.png#gh-light-mode-only" alt="Mpxuse - Mpx的composition-api的公用方法" width="300">
</a>
<a href="https://github.com/mpx-ecology/mpxuse#gh-dark-mode-only">
  <img src="https://raw.githubusercontent.com/mpx-ecology/mpxuse/main/packages/public/logo-vertical-dark.png#gh-dark-mode-only" alt="Mpxuse - Mpx的composition-api的公用方法" width="300">
</a>
<br>
Mpx的composition-api的公用方法
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@mpxjs/mpxuse-core" target="__blank"><img src="https://img.shields.io/npm/v/@mpxjs/mpxuse-core?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@mpxjs/mpxuse-core" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@mpxjs/mpxuse-core?color=50a36f&label="></a>
<a href="https://mpx-ecology.github.io/mpxuse" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a" alt="Docs & Demos"></a>
<img alt="函数数量" src="https://raw.githubusercontent.com/mpx-ecology/mpxuse/main/packages/public/badge-function-count.svg">
<br>
<a href="https://github.com/mpx-ecology/mpxuse" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/mpx-ecology/mpxuse?style=social"></a>
</p>

## 🚀 功能

- 🎪 [**文档和演示**](https://mpx-ecology.github.io/mpxuse)
- 🕶 **支持版本**: mpx2.8版本以上
- ⚡ **完全tree shakeable**: 仅打包所引用的, [bundle size](https://mpx-ecology.github.io/mpxuse/export-size)
- 🦾 **Type Strong**: [TypeScript](https://www.typescriptlang.org/)编写, [TS Docs](https://github.com/microsoft/tsdoc)
- 🔩 **灵活配置**: 可配置的事件筛选器和目标

## 🦄 用法

```ts
import { useCounter } from '@mpxjs/mpxuse-core'

const { count, inc, dec, set, reset } = useCounter()
defineExpose({
  count, inc, dec, set, reset
})
```

```html
<template>
  <view>
    <view>Count: {{ count }}</view>
    <button bindtap="inc">
      Increment
    </button>
    <button bindtap="dec">
      Decrement
    </button>
    <button bindtap="inc(5)">
      Increment (+5)
    </button>
    <button bindtap="dec(5)">
      Decrement (-5)
    </button>
    <button bindtap="set(100)">
      Set (100)
    </button>
    <button bindtap="reset">
      Reset
    </button>
  </view>
</template>

```

参考 [所有函数](https://mpx-ecology.github.io/mpxuse/functions) 或者 [文档](https://mpx-ecology.github.io/mpxuse/) 查看更多

## 📦 安装

> 🎩 mpx版本需要2.8以上才支持组合式Composition API!

```bash
npm i @mpxjs/mpxuse-core
```

###### Demos

可clone仓库执行

```js
pnpm i
cd demo && pnpm i
npm run watch
```

## 🧱 贡献

参考 [**如何共建**](https://mpx-ecology.github.io/mpxuse/contributing)

## 🌸 感谢

这个项目的灵感来源于以下几个很棒的项目。

- [vueuse/vueuse](https://github.com/vueuse/vueuse)

## 👨‍🚀 贡献者

[pagnkelly](https://github.com/pagnkelly)

## 📄 License

[MIT License](https://github.com/mpx-ecology/mpxuse/blob/main/LICENSE) © 2022 [pagnkelly](https://github.com/pagnkelly)
