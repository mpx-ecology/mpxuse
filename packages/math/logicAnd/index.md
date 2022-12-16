---
category: '@Math'
alias: and
related: logicNot, logicOr
---

# logicAnd

ref的`与`

## 用法

```ts
import { logicAnd } from '@mpxjs/mpxuse-math'
import { whenever } from '@mpxjs/mpxuse-core'

const a = ref(true)
const b = ref(false)

whenever(logicAnd(a, b), () => {
  console.log('both a and b are now truthy!')
})
```
