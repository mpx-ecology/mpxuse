---
category: Miniprogram
---

# useStorage

数据存储在本地缓存中指定的 key 中

## 基本用法

获取该key的存储
```js
import { useStorage } from '@mpxjs/mpxuse-core'

const { res } = useStorage('key')

```

## 参数用法

### 存储数据
```js
import { useStorage } from '@mpxjs/mpxuse-core'

const data = useStorage(
  'key',
  { text: 'storage content' }, 
  {
    sync: true, // 全部使用同步方法 默认异步
    serializer: {
      read(raw: string): T { return raw === 'true' },
      write(value: T) { return String(v) }
    }, // 序列化处理
    encrypt: false, // 异步可以加密处理 默认不加密
    onError: () => {} // 错误处理,
    shallow: false, // 是否用shallow 默认ref
  }
)

// 移除掉该key的存储
data.value = null
// 更改存储
data.value = { title: 'useStorage' }

```

### 只想获取数据
```js
import { useStorage } from '@mpxjs/mpxuse-core'

const data = useStorage(
  'key'
)

console.log(data.value) // anything

data.value = 'other' // 依然可以修改
```