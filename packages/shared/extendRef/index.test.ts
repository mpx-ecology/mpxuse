
import { ref } from '@mpxjs/core'
import { extendRef } from '.'

describe('extendRef', () => {
  it('same key', () => {
    const myRef = ref({ foo: 'content' })

    const extended = extendRef(myRef, { foo: 'extra data' })

    expect(extended.value.foo).toBe('extra data')
    expect(myRef.value.foo).toBe('extra data')
    expect(extended).toEqual(myRef)
  })

  it('diffent key', () => {
    const myRef = ref({ foo: 'content' }) as any

    const extended = extendRef(myRef, { bar: 'bar' })

    expect(extended.value.foo).toBe('content')
    expect(myRef.value.bar).toBe('bar')
  })

  it('object', () => {
    const myRef = { foo: 'content' } as any

    const extended = extendRef(myRef, { bar: 'bar' })

    expect(extended.value.foo).toBe('content')
    expect(myRef.bar).toBe('bar')
  })
  it('ref', () => {
    const myRef = ref({ foo: 'content' }) as any

    const extended = extendRef(myRef, ref({ bar: 'bar' }))

    expect(extended.value.foo).toBe('content')
    expect(myRef.value.bar).toBe('bar')
  })
})
