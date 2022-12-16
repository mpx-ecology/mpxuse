---
category: Array
---

# useArrayFind

响应式 `Array.find`.

## 用法

```js
import { useArrayFind } from '@mpxjs/mpxuse-core'

const list = [ref(1), ref(-1), ref(2)]
const positive = useArrayFind(list, val => val > 0)
// positive.value: 1
```

### 响应式数组

```js
import { useArrayFind } from '@mpxjs/mpxuse-core'

const list = ref([-1, -2])
const positive = useArrayFind(list, val => val > 0)
// positive.value: undefined
list.push(1)
// positive.value: 1
```
