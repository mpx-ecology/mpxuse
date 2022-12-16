---
category: '@Math'
alias: not
---

# logicNot

ref的`非`

## 用法

```ts
import { logicNot } from '@mpxjs/mpxuse-math'
import { whenever } from '@mpxjs/mpxuse-core'

const a = ref(true)

whenever(logicNot(a), () => {
  console.log('a is now falsy!')
})
```
