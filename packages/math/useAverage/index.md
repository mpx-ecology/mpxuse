---
category: '@Math'
---

# useAverage

获取响应式数组的平均值

## 用法

```ts
import { useAverage } from '@mpxjs/mpxuse-math'

const list = ref([1, 2, 3])
const averageValue = useAverage(list) // Ref<2>
```

```ts
import { useAverage } from '@mpxjs/mpxuse-math'

const a = ref(1)
const b = ref(3)

const averageValue = useAverage(a, b) // Ref<2>
```
