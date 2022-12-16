---
category: Watch
alias: ignorableWatch
---

# watchIgnorable

忽略 watch

## 用法

拓展 `watch` 返回额外的 `ignoreUpdates(updater)` and `ignorePrevAsyncUpdates()` 忽略对源的特定更新。


```ts
import { watchIgnorable } from '@mpxjs/mpxuse-core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, ignoreUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

ignoreUpdates(() => {
  source.value = 'foobar'
})
await nextTick() // (nothing happened)

source.value = 'hello'
await nextTick() // logs: Changed to hello!

ignoreUpdates(() => {
  source.value = 'ignored'
})
source.value = 'logged'

await nextTick() // logs: Changed to logged!
```

## 刷新规则

`watchIgnorable`接受与`watch` 相同的参数并且用法相同
所以默认可组合使用 `flush: 'pre'`.

## `ignorePrevAsyncUpdates`

此功能仅适用于异步刷新`pre`和`post`。如果使用`flush`:`sync`，则`ignorePrevAsyncUpdate()`是一个空操作，因为每次更新源代码后都会立即触发监视。它仍然为同步刷新提供，因此代码可以更通用。

```ts
import { watchIgnorable } from '@mpxjs/mpxuse-core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { ignorePrevAsyncUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

source.value = 'good'
source.value = 'by'
ignorePrevAsyncUpdates()

await nextTick() // (nothing happened)

source.value = 'prev'
ignorePrevAsyncUpdates()
source.value = 'after'

await nextTick() // logs: Changed to after!
```

## 推荐阅读

- [Ignorable Watch](https://patak.dev/vue/ignorable-watch.html) - by [@matias-capeletto](https://github.com/matias-capeletto)
