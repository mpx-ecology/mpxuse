---
category: Array
---

# useArraySome

响应式 `Array.some`

## 用法

### 数组元素都是ref

```js
import { useArraySome } from '@mpxjs/mpxuse-core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArraySome(list, i => i > 10)
// result.value: false
item1.value = 11
// result.value: true
```

### 响应式数组

```js
import { useArraySome } from '@mpxjs/mpxuse-core'
const list = ref([0, 2, 4, 6, 8])
const result = useArraySome(list, i => i > 10)
// result.value: false
list.value.push(11)
// result.value: true
```
