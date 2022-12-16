---
category: '@Math'
related: createGenericProjection
---

# useProjection

从一个范围到另一个范围的响应式数字映射。

## 用法

```ts
import { useProjection } from '@mpxjs/mpxuse-math'

const input = ref(0)
const projected = useProjection(input, [0, 10], [0, 100])

input.value = 5 // projected.value === 50
input.value = 10 // projected.value === 100
```
