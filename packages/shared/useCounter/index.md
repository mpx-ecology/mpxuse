---
category: Utilities
---

# useCounter

具有实用功能的基本计数器。

## 基本用法

```js
import { useCounter } from '@mpxjs/mpxuse-core'

const { count, inc, dec, set, reset } = useCounter()
```

## 参数用法

```js
import { useCounter } from '@mpxjs/mpxuse-core'

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 })
```
