---
category: '@Math'
---

# useMin

响应式 `Math.min`.

## 用法

```ts
import { useMin } from '@mpxjs/mpxuse-math'

const array = ref([1, 2, 3, 4])
const sum = useMin(array) // Ref<1>
```

```ts
import { useMin } from '@mpxjs/mpxuse-math'

const a = ref(1)
const b = ref(3)

const sum = useMin(a, b, 2) // Ref<1>
```
