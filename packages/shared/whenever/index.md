---
category: Watch
---

# whenever

watching的值为truth的简便写法

## 用法

```js
import { whenever } from '@mpxjs/mpxuse-core'

whenever(isReady, () => console.log(state))
```

```ts
// this
whenever(ready, () => console.log(state))

// is equivalent to:
watch(ready, (isReady) => {
  if (isReady)
    console.log(state)

})
```

### Callback Function

与`watch`相同，回调将使用`cb(value, oldValue, onInvalidate)`调用。

```ts
whenever(height, (current, lastHeight) => {
  if (current > lastHeight)
    console.log(`Increasing height by ${current - lastHeight}`)

})
```

### Computed

与`watch`相同，您可以传递getter函数来计算每个更改。

```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
)
```

### Options

选项和默认值与`watch`相同。

```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
  { flush: 'sync' },
)
```
