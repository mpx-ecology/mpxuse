---
category: '@Math'
---

# usePrecision

响应式地设置数字的精度。

## 用法

```ts
import { usePrecision } from '@mpxjs/moxuse-math'

const value = ref(3.1415)
const result = usePrecision(value, 2) // 3.14

const ceilResult = usePrecision(value, 2, {
  math: 'ceil'
}) // 3.15

const floorResult = usePrecision(value, 3, {
  math: 'floor'
}) // 3.141
```
