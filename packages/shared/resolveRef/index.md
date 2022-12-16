---
category: Reactivity
related: resolveUnref
---

# resolveRef

将值/ref/getter规范化为`ref`或`computed`。

## 用法

```ts
import { resolveRef } from '@mpxjs/mpxuse-core'

const foo = ref('hi')

const a = resolveRef(0) // Ref<number>
const b = resolveRef(foo) // Ref<string>
const c = resolveRef(() => 'hi') // ComputedRef<string>
```
