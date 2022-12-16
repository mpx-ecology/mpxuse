---
category: '@Math'
alias: or
related: logicAnd, logicNot
---

# logicOr

ref的`或`

## 用法

```ts
import { logicOr } from '@mpxjs/mpxuse-math'
import { whenever } from '@mpxjs/mpxuse-core'

const a = ref(true)
const b = ref(false)

whenever(logicOr(a, b), () => {
  console.log('either a or b is truthy!')
})
```
