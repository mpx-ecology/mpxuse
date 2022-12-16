---
category: '@Math'
---

# useTrunc

响应式的 `Math.trunc`.

## 用法

```ts
import { useTrunc } from '@mpxjs/mpxuse-math'

const value1 = ref(0.95)
const value2 = ref(-2.34)
const result1 = useTrunc(value1) // 0
const result2 = useTrunc(value2) // -2
```
