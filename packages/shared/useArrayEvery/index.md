---
category: Array
---

# useArrayEvery

响应式 `Array.every`

## 用法

### 数组元素都是ref

```js
import { useArrayEvery } from '@mpxjs/mpxuse-core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayEvery(list, i => i % 2 === 0)
// result.value: true
item1.value = 1
// result.value: false
```

### 响应式数组

```js
import { useArrayEvery } from '@mpxjs/mpxuse-core'
const list = ref([0, 2, 4, 6, 8])
const result = useArrayEvery(list, i => i % 2 === 0)
// result.value: true
list.value.push(9)
// result.value: false
```
