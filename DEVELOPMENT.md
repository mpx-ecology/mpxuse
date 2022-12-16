## 开发文档

- demo的`@mpxjs/core`，`@mpxjs/api-proxy`，`@mpxjs/store`被移到了最外层，因为要和`packages`里共用。下面demo的设计会解释。

### DEMO设计

demo里面的组件代码是自动生成的，通过`npm run demo`来生成，是粘贴复制了`packages`里的`demo.mpx`，而每个demo引用的方法还在`packages`里，所以mpx相关核心方法移到了最上层，这样use方法和demo里引用的是同一份mpx，而不是各自的node_modules，出现两个mpx引用。

### 开发容易出现的问题

例如你在你的方法中引入其他方法，需要这么操作
```js
import { resolveUnref } from '../resolveUnref' ✅
import { resolveUnref } from '..'   ❌
```
⚠️ 如果错误操作，就会发生一些莫名的错误，不要这么操作。