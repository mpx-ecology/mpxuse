import { nextTick, ref } from '@mpxjs/core'
import { pausableWatch, watchPausable } from '.'
import { noop } from '../utils'

describe('watchPausable', () => {
  it('should export module', () => {
    expect(watchPausable).toBeDefined()
    expect(pausableWatch).toBeDefined()
  })

  it('should work', async () => {
    const num = ref(0)
    const cb = vi.fn()
    const { stop, pause, resume, isActive } = watchPausable(num, cb)

    num.value = 1
    await nextTick(noop)
    expect(isActive.value).toBeTruthy()
    expect(cb).toHaveBeenCalledWith(1, 0, expect.anything())

    pause()
    num.value = 2
    await nextTick(noop)
    expect(isActive.value).toBeFalsy()
    expect(cb).toHaveBeenCalledTimes(1)

    resume()
    num.value = 3
    await nextTick(noop)
    expect(isActive.value).toBeTruthy()
    expect(cb).toHaveBeenCalledWith(3, 2, expect.anything())

    stop()
    num.value = 4
    await nextTick(noop)
    expect(isActive.value).toBeTruthy()
    expect(cb).toHaveBeenCalledTimes(2)
  })
})
