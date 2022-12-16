---
category: State
# related: createSharedComposable
---

# createGlobalState

保持全局范围中的状态，以便在Mpx实例之间重用。

## 用法

### 例子

```js
// store.js
import { ref } from '@mpxjs/core'
import { createGlobalState } from '@mpxjs/mpxuse-core'

export const useGlobalState = createGlobalState(
  () => {
    const count = ref(0)
    return { count }
  }
)
```

### 复杂例子

```js
// store.js
import { computed, ref } from '@mpxjs/core'
import { createGlobalState } from '@mpxjs/mpxuse-core'

export const useGlobalState = createGlobalState(
  () => {
    // state
    const count = ref(initialValue)

    // getters
    const doubleCount = computed(() => count.value * 2)

    // actions
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  }
)
```

