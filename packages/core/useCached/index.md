---
category: Utilities
---

# useCached

使用自定义比较函数缓存引用。

## 用法

```ts
import { useCached } from '@mpxjs/mpxuse-core'

interface Data {
  value: number
  extra: number
}

const source = ref<Data>({ value: 42, extra: 0 })
const cached = useCached(source, (a, b) => a.value === b.value)

source.value = {
  value: 42,
  extra: 1,
}

console.log(cached.value) // { value: 42, extra: 0 }

source.value = {
  value: 43,
  extra: 1,
}

console.log(cached.value) // { value: 43, extra: 1 }
```
