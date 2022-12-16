import { nextTick, ref } from '@mpxjs/core'
import { watchAtMost } from '.'
import { noop } from '../utils'

describe('watchAtMost', () => {
  it('should work', async () => {
    const num = ref(0)
    const spy = vitest.fn()

    const { count } = watchAtMost(num, spy, {
      count: 2
    })
    num.value = 1
    await nextTick(noop)
    num.value = 2
    await nextTick(noop)
    num.value = 3
    await nextTick(noop)
    expect(spy).toBeCalledTimes(2)
    expect(count.value).toBe(2)
  })
})
