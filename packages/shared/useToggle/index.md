---
category: Utilities
---

# useToggle

带有实用函数的布尔切换器。

## 用法

```js
import { useToggle } from '@mpxjs/mpxuse-core'

const [value, toggle] = useToggle()
```

传递引用时，“useToggle”将返回一个简单的toggle函数：

```js
import { useToggle } from '@mpxjs/mpxuse-core'

const isDark = ref(true)
const toggleDark = useToggle(isDark)
```
