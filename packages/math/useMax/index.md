---
category: '@Math'
---

# useMax

响应式 `Math.max`.

## 用法

```ts
import { useMax } from '@mpxjs/mpxuse-math'

const array = ref([1, 2, 3, 4])
const max = useMax(array) // Ref<4>
```

```ts
import { useMax } from '@mpxjs/mpxuse-math'

const a = ref(1)
const b = ref(3)

const max = useMax(a, b, 2) // Ref<3>
```
