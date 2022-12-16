import type { Ref } from '@mpxjs/core'
import { nextTick, ref, unref } from '@mpxjs/core'
import { whenever } from '.'
import { noop } from '../utils'
describe('whenever', () => {
  const expectType = <T>(value: T) => value

  it('ignore falsy state change', async () => {
    // use a component to simulate normal use case
    const number = ref<number | null | undefined>(1)
    const changeNumber = (v: number) => number.value = v
    const watchCount = ref(0)
    const watchValue: Ref<number | undefined> = ref()

    whenever(number, (value) => {
      watchCount.value += 1
      watchValue.value = value

      expectType<number>(value)

      // @ts-expect-error value should be of type number
      expectType<undefined>(value)
      // @ts-expect-error value should be of type number
      expectType<null>(value)
      // @ts-expect-error value should be of type number
      expectType<string>(value)
    })

    expect(unref(watchCount)).toEqual(0)

    changeNumber(2)
    await nextTick(noop)
    expect(unref(watchCount)).toEqual(1)
    expect(unref(watchValue)).toEqual(2)

    changeNumber(0)
    await nextTick(noop)
    expect(unref(watchCount)).toEqual(1)
    expect(unref(watchValue)).toEqual(2)

    changeNumber(3)
    await nextTick(noop)
    expect(unref(watchCount)).toEqual(2)
    expect(unref(watchValue)).toEqual(3)
  })
})
