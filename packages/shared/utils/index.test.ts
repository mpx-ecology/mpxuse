import { handleNoEvent } from '.'

describe('handleNoEvent', () => {
  it('should be defined', () => {
    expect(handleNoEvent).toBeDefined()
  })

  it('should be handle remove event', () => {
    const eventTarget = {
      type: 'tap',
      target: {},
      currentTarget: {}
    }
    const fn = (data = 1) => {
      return data
    }
    const handleFn = handleNoEvent(fn)
    expect(handleFn(eventTarget)).toBe(1)
    expect(handleFn(eventTarget, 2)).toBe(2)
    expect(handleFn(2)).toBe(2)
  })
})
