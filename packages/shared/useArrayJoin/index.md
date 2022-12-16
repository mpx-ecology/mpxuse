---
category: Array
---

# useArrayJoin

响应式 `Array.join`

## 用法

### 数组元素都是ref

```js
import { useArrayJoin } from '@mpxjs/mpxuse-core'
const item1 = ref('foo')
const item2 = ref(0)
const item3 = ref({ prop: 'val' })
const list = [item1, item2, item3]
const result = useArrayJoin(list)
// result.value: foo,0,[object Object]
item1.value = 'bar'
// result.value: bar,0,[object Object]
```

### 响应式数组

```js
import { useArrayJoin } from '@mpxjs/mpxuse-core'
const list = ref(['string', 0, { prop: 'val' }, false, [1], [[2]], null, undefined, []])
const result = useArrayJoin(list)
// result.value: string,0,[object Object],false,1,2,,,
list.value.push(true)
// result.value: string,0,[object Object],false,1,2,,,,true
list.value = [null, 'string', undefined]
// result.value: ,string,
```

### 响应式处理函数

```js
import { useArrayJoin } from '@mpxjs/mpxuse-core'
const list = ref(['string', 0, { prop: 'val' }])
const separator = ref()
const result = useArrayJoin(list, separator)
// result.value: string,0,[object Object]
separator.value = ''
// result.value: string0[object Object]
separator.value = '--'
// result.value: string--0--[object Object]
```
