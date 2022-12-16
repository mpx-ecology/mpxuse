---
category: Watch
---

# watchArray

观察添加和删除的数组。

## 用法

类似于`watch`，但为回调函数提供添加和删除的元素。如果列表用`push`、`splice`等更新到位，则传递`｛deep:true｝`。

```ts
import { watchArray } from '@mpxjs/mpxuse-core'

const list = ref([1, 2, 3])

watchArray(list, (newList, oldList, added, removed) => {
  console.log(newList) // [1, 2, 3, 4]
  console.log(oldList) // [1, 2, 3]
  console.log(added) // [4]
  console.log(removed) // []
})

onMounted(() => {
  list.value = [...list.value, 4]
})
```
