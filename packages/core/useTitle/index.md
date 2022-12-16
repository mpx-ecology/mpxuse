---
category: Miniprogram
---

# useTitle

响应式标题

> 监听文本调用`mpx.setNavigationBarTitle`

## 用法

```js
import { useTitle } from '@mpxjs/mpxuse-core'

const title = useTitle()
console.log(title.value) 
title.value = 'Hello' // 改变的当前标题
```

立即设置初始值

```js
const title = useTitle('New Title')
```

传递“ref”，当源引用更改时，标题将更新：

```js
import { useTitle } from '@mpxjs/mpxuse-core'

const messages = ref(0)

const title = computed(() => {
  return !messages.value ? 'No message' : `${messages.value} new messages`
})

useTitle(title) // 文档标题将与参考“标题”匹配
```
