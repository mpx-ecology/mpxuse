import { nextTick, ref } from '@mpxjs/core'
import { ignorableWatch, watchIgnorable } from '.'
import { noop } from '../utils'

describe('watchIgnorable', () => {
  test('export module', () => {
    expect(watchIgnorable).toBeDefined()
    expect(ignorableWatch).toBeDefined()
  })

  test('ignore async updates', async () => {
    const source = ref(0)
    const target = ref(0)
    const { ignoreUpdates } = watchIgnorable(source, value => target.value = value)

    source.value = 1

    await nextTick(noop)
    expect(target.value).toBe(1)

    ignoreUpdates(() => {
      source.value = 2
      source.value = 3
    })

    await nextTick(noop)
    expect(target.value).toBe(1)

    ignoreUpdates(() => {
      source.value = 4
    })
    source.value = 5

    await nextTick(noop)
    expect(target.value).toBe(5)
  })

  test('ignore prev async updates', async () => {
    const source = ref(0)
    const target = ref(0)
    const { ignorePrevAsyncUpdates } = watchIgnorable(source, value => target.value = value)

    source.value = 1

    await nextTick(noop)
    expect(target.value).toBe(1)

    source.value = 2
    source.value = 3
    ignorePrevAsyncUpdates()

    await nextTick(noop)
    expect(target.value).toBe(1)

    source.value = 4
    ignorePrevAsyncUpdates()
    source.value = 5

    await nextTick(noop)
    expect(target.value).toBe(5)
  })

  test('ignore sync updates', () => {
    const source = ref(0)
    const target = ref(0)
    const { ignoreUpdates, ignorePrevAsyncUpdates } = watchIgnorable(source, value => target.value = value, { flush: 'sync' })

    source.value = 1

    expect(target.value).toBe(1)

    ignoreUpdates(() => {
      source.value = 2
      source.value = 3
    })

    expect(target.value).toBe(1)

    ignoreUpdates(() => {
      source.value = 4
    })

    source.value = 5

    ignorePrevAsyncUpdates()

    expect(target.value).toBe(5)
  })

  test('stop watch', async () => {
    const source = ref(0)
    const callback = vi.fn()
    const { stop } = watchIgnorable(source, callback)

    source.value = 1

    await nextTick(noop)

    stop()
    source.value = 2

    await nextTick(noop)

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
