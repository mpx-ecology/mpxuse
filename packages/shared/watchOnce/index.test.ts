import { nextTick, ref } from '@mpxjs/core'
import { watchOnce } from '.'
import { noop } from '../utils'

describe('watchOnce', () => {
  it('should work', async () => {
    const num = ref(0)
    const spy = vitest.fn()

    watchOnce(num, spy)
    num.value = 1
    await nextTick(noop)
    num.value = 2
    await nextTick(noop)
    expect(spy).toBeCalledTimes(1)
  })
})
