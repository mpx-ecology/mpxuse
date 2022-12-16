import { ref } from '@mpxjs/core'
import { useSum } from '.'

describe('useSum', () => {
  it('should be defined', () => {
    expect(useSum).toBeDefined()
  })

  it('array 用法', () => {
    const array = ref([1, 2, 3, 4])
    const sum = useSum(array)
    expect(sum.value).toBe(10)
    array.value = [-1, -2, 3, 4]
    expect(sum.value).toBe(4)
  })

  it('rest 用法', () => {
    const a = ref(1)
    const b = ref(2)
    const sum = useSum(a, () => b.value, 3)
    expect(sum.value).toBe(6)
    b.value = 3
    expect(sum.value).toBe(7)
  })
})
