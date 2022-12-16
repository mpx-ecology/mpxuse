---
category: Watch
---

# watchAtMost

`watch`有触发次数。

## 用法

类似于`watch`，带有一个额外的选项`count`，用于设置触发回调函数的次数。达到计数后，`watch`将自动停止。

```ts
import { watchAtMost } from '@mpxjs/mpxuse-core'

watchAtMost(
  source,
  () => { console.log('trigger!') }, // triggered it at most 3 times
  {
    count: 3, // the number of times triggered
  },
)
```
