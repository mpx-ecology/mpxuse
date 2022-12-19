---
category: Miniprogram
---

# useClipboard

调用剪贴板复制内容

## Usage

```js
import { useClipboard } from '@mpxjs/mpxuse-core'

const source = ref('Hello')
const { text, copy, copied, flush } = useClipboard({ source })
defineExpose({
  source,
  text,
  flush,
  copy,
  copied
})
```

```html
<button bindtap='copy'>
  <!-- by default, `copied` will be reset in 1.5s -->
  <view wx:if='{{!copied}}'>Copy</view>
  <view wx:else>Copied!</view>
</button>
```
