---
category: '@Math'
---

# useClamp

响应式地将一个值夹在两个其他值之间。

## 用法

```ts
import { useClamp } from '@mpxjs/mpxuse-math'

const min = ref(0)
const max = ref(10)
const value = useClamp(0, min, max)
```
