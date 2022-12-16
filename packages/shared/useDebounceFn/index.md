---
category: Utilities
related: useThrottleFn
---

# useDebounceFn

取消执行函数。
>
> Debounce是一个超负荷的服务员：如果你一直问他，你的请求将被忽略，直到你停下来，给他一些时间思考你最近的询问。

## 用法

```js
import { useDebounceFn } from '@mpxjs/mpxuse-core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

const onScrolling = () => debouncedFn()
```

您还可以向其传递第三个参数，该参数具有最大等待时间，类似于 [lodash debounce](https://lodash.com/docs/4.17.15#debounce)

```js
import { useDebounceFn } from '@mpxjs/mpxuse-core'

// If no invokation after 5000ms due to repeated input,
// the function will be called anyway.
const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000, { maxWait: 5000 })

const onScrolling = () => debouncedFn()
```


## 推荐阅读

- [**防抖与节流**: 最终视觉指南](https://redd.one/blog/debounce-vs-throttle)
