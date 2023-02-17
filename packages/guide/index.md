# 快速开始

MpxUse是基于[Composition API](https://mpxjs.cn/api/composition-api.html)的实用程序函数集合. 我们假设您已经熟悉[Composition API](https://mpxjs.cn/articles/2.8-release.html)的基本思想在继续之前。

## 安装说明

> 🎩 mpx版本需要2.8以上才支持组合式Composition API!

```bash
npm i @mpxjs/mpxuse-core
```

## Demos

可clone[仓库](https://github.com/mpx-ecology/mpxuse)执行
```bash
pnpm i
cd demo && pnpm i
npm run watch
```

## 用法 Example

只需从`@mpxjs/mpxuse-core`中导入所需的函数 

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
有关详细信息，请参阅[函数列表](/functions)。
