---
category: Array
---

# useArrayReduce

响应式 `Array.reduce`.

## 用法

```js
import { useArrayReduce } from '@mpxjs/mpxuse-core'

const sum = useArrayReduce([ref(1), ref(2), ref(3)], (sum, val) => sum + val)
// sum.value: 6
```

### 响应式数组

```js
import { useArrayReduce } from '@mpxjs/mpxuse-core'

const list = ref([1, 2])
const sum = useArrayReduce(list, (sum, val) => sum + val)

list.push(3)
// sum.value: 6
```

### 初始值

```js
import { useArrayReduce } from '@mpxjs/mpxuse-core'

const list = ref([{ num: 1 }, { num: 2 }])
const sum = useArrayReduce(list, (sum, val) => sum + val.num, 0)
// sum.value: 3
```
