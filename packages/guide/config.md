# 配置

这些显示了MpxUse中大多数函数的常规配置。

### 事件过滤器

我们提供了事件过滤器系统，可以灵活控制何时触发事件。例如，您可以使用`throttleFilter`和`debounceFilter`来控制事件触发率:

```ts
import { debounceFilter, watchWithFilter } from '@mpxjs/mpxuse-core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```

此外，您可以使用`pausableFilter`暂时暂停某些事件。

```ts
import { pausableFilter } from '@mpxjs/mpxuse-core'

const motionControl = pausableFilter()

// useDeviceMotion 未实现
const motion = useDeviceMotion({ eventFilter: motionControl.eventFilter })

motionControl.pause()

// motion updates paused

motionControl.resume()

// motion updates resumed
```

### 响应式 Timing

MpxUse的功能遵循Mpx的响应式默认值[刷新时间](https://mpxjs.cn/api/reactivity-api/computed-watch-api.html#watchsynceffect）。

对于类似于`watch`的可组合文件（例如`pausableWatch`、`useStorage`、），默认值为`｛flush:‘pre’｝`。这意味着它们将缓冲无效的效果并异步刷新它们。这避免了在同一`tick`中发生多个状态突变时不必要的重复调用。

与`watch`相同，MpxUse允许您通过传递`flush`选项来配置计时：

```ts
const { pause, resume } = pausableWatch(
  () => {
    // Safely access updated DOM
  },
  { flush: 'post' },
)
```

**flush 选项 (default: `'pre'`)**
- `'pre'`: 缓冲区使同一`tick`中的效果无效，并在渲染前刷新它们
- `'post'`: 类似于`pre`的异步，但在组件更新后激发，以便您可以访问更新的DOM
- `'sync'`: 强制效果始终同步触发