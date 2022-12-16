---
category: Reactivity
---

# extendRef

合并两个对象

## 用法

Refs 将会 unwrapped 并且触发响应式

```ts
import { ref } from '@mpxjs/core'
import { extendRef } from '@mpxjs/mpxuse-core'

const myRef = ref({ foo: 'content' })

const extended = extendRef(myRef, { foo: 'extra data' })

extended.value.foo === 'extra data'
myRef.value.foo === 'extra data' // will trigger update
extended === myRef
```

不会触发响应式，是否响应取决于第一个参数是否是ref

```ts
import { ref } from '@mpxjs/core'
import { extendRef } from '@mpxjs/mpxuse-core'

const myRef = { foo: 'content' }

const extended = extendRef(myRef, ref({ foo: 'extra data' }))

extended.value.foo === 'extra data'
myRef.value.foo === 'extra data' // will not trigger update
extended === myRef
```
