---
category: Reactivity
alias: createReactiveFn
---

# reactify

将纯函数转换为反应函数。转换后的函数接受ref作为其参数，并返回类型正确的ComputedRef。


## 用法

基本用例

```ts
import { reactify } from '@mpxjs/mpxuse-core'

// 简单的函数
function add(a: number, b: number): number {
  return a + b
}

// 现在它接受引用并返回计算的引用
// (a: number | Ref<number>, b: number | Ref<number>) => ComputedRef<number>
const reactiveAdd = reactify(add)

const a = ref(1)
const b = ref(2)
const sum = reactiveAdd(a, b)

console.log(sum.value) // 3

a.value = 5

console.log(sum.value) // 7
```

实现的例子 [毕达哥拉斯定理](https://en.wikipedia.org/wiki/Pythagorean_theorem).

```ts
import { reactify } from '@mpxjs/mpxuse-core'

const pow = reactify(Math.pow)
const sqrt = reactify(Math.sqrt)
const add = reactify((a: number, b: number) => a + b)

const a = ref(3)
const b = ref(4)
const c = sqrt(add(pow(a, 2), pow(b, 2)))
console.log(c.value) // 5

// 5:12:13
a.value = 5
b.value = 12
console.log(c.value) // 13
```

你也可以这样做:

```ts
import { reactify } from '@mpxjs/mpxuse-core'

function pythagorean(a: number, b: number) {
  return Math.sqrt(a ** 2 + b ** 2)
}

const a = ref(3)
const b = ref(4)

const c = reactify(pythagorean)(a, b)
console.log(c.value) // 5
```

其他的例子比如让`stringify`变成响应式

```ts
import { reactify } from '@mpxjs/mpxuse-core'

const stringify = reactify(JSON.stringify)

const obj = ref(42)
const dumped = stringify(obj)

console.log(dumped.value) // '42'

obj.value = { foo: 'bar' }

console.log(dumped.value) // '{"foo":"bar"}'
```
