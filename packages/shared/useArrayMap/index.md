---
category: Array
---

# useArrayMap

响应式 `Array.map`

## 用法

### 数组元素都是ref

```js
import { useArrayMap } from '@mpxjs/mpxuse-core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayMap(list, i => i * 2)
// result.value: [0, 4, 8, 12, 16]
item1.value = 1
// result.value: [2, 4, 8, 12, 16]
```

### 响应式数组

```js
import { useArrayMap } from '@mpxjs/mpxuse-core'
const list = ref([0, 1, 2, 3, 4])
const result = useArrayMap(list, i => i * 2)
// result.value: [0, 2, 4, 6, 8]
list.value.pop()
// result.value: [0, 2, 4, 6]
```
