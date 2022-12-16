---
category: Utilities
---

# useEventBus

一个基础的 event bus.

## 用法

```ts
import { useEventBus } from '@mpxjs/mpxuse-core'

const bus = useEventBus<string>('news')

const listener = (event: string) => {
  console.log(`news: ${event}`)
}

// listen to an event
const unsubscribe = bus.on(listener)

// fire an event
bus.emit('The Tokyo Olympics has begun')

// unregister the listener
unsubscribe()
// or
bus.off(listener)

// clearing all listeners
bus.reset()
```

卸载组件时，在组件“setup”内部注册的侦听器将自动注销。


