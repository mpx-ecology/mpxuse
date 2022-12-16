---
category: Watch
---

# watchOnce

`watch` 仅执行一次

## 用法

回调功能触发一次后，watch将自动停止。

```ts
import { watchOnce } from '@mpxjs/mpxuse-core'

watchOnce(source, () => {
  // triggers only once
  console.log('source changed!')
})
```
