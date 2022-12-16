---
category: Reactivity
related: resolveRef
---

# resolveUnref

获取value/ref/getter的值。

## 用法

```ts
import { resolveUnref } from '@mpxjs/mpxuse-core'

const foo = ref('hi')

const a = resolveUnref(0) // 0
const b = resolveUnref(foo) // 'hi'
const c = resolveUnref(() => 'hi') // 'hi'
```
