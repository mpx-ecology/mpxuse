# 最佳实践

### 解构

MpxUse中的大多数函数都返回一个**refs**对象，您可以使用[ES6的对象析构函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)打开语法以获取所需内容。例如：

```ts
import { useToggle, useCounter } from '@mpxjs/mpxuse-core'

// count is ref
const { count, inc, dec, set, reset } = useCounter()

console.log(count.value)

// value is ref
const [ value, toggle ] = useToggle()

console.log(value.value)

```

如果您希望将它们用作对象属性样式，则可以使用`reactive()`展开引用。例如：

```ts
import { reactive } from '@mpxjs/core'
import { useCounter } from '@mpxjs/mpxuse-core'

const data = reactive(useCounter())

// 返回的内容都被解包，`去value`化，可以直接获取
console.log(data.count)
console.log(data.inc)
```

### 副作用清理

与卸载组件时将释放的Mpx的`watch`和`computed`类似，MpxUse的函数也会自动清除副作用。

例如，当卸载组件时或者作用域消失时，`useEventBus`将调用`off`解绑监听的内容，因此您无需担心。

```ts
// 作用域消失自动解绑
const bus = useEventBus<string>('news')

const listener = (event: string) => {
  console.log(`news: ${event}`)
}

// 返回解绑函数
const unsubscribe = bus.on(listener)

// 可手动
unsubscribe()
```

所有MpxUse函数都遵循此约定。

要手动处理副作用，某些函数会返回一个停止处理程序，就像`watch`函数一样。例如：

```ts
const { stop } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

// 手动注销事件侦听器
stop()
```

虽然并非所有函数都返回处理程序，但更一般的解决方案是使用[`effectScope`API](https://mpxjs.cn/api/reactivity-api/effect-scope.html#effectscope)。

```ts
import { effectScope } from '@mpxjs/core'

const scope = effectScope()

scope.run(() => {
  // ...

  const doubled = computed(() => counter.value * 2)
    
  watch(doubled, () => console.log(doubled.value))
  
  watchEffect(() => console.log('Count: ', doubled.value))
})

// 在“范围”内调用的所有可组合项。将释放运行
scope.stop()
```

### 将ref作为参数传递

在Mpx中，我们使用`setup()`函数构造数据和逻辑之间的`连接`。为了使其更灵活，大多数MpxUse函数还接受参数的ref版本。

以useTitle为例：

###### 正常使用情况

通常`useTitle`返回反映页面标题的引用。当您为ref指定新值时，它会自动更新标题。

```ts
const isDark = useDark() // 假设useDark返回一个Ref<boolean>,MpxUse没有useDark这个方法
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```

###### 联动用法

如果你想`联动`的使用，则可以传递一个ref，使其绑定到页面标题。

```ts
const isDark = useDark() // 假设useDark返回一个Ref<boolean>,MpxUse没有useDark这个方法
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

###### 响应式getter

将`Reactive Getter`作为参数传递。

```ts
const isDark = useDark() // 假设useDark返回一个Ref<boolean>,MpxUse没有useDark这个方法

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
```
