const { binarySearch } = require('./iterative-solution')

describe('binary search', () => {
  it('should return -1 when empty list', () => {
    expect(binarySearch([], 1)).toBe(-1)
  })

  it('should return -1 when the target element is not in the list', () => {
    expect(binarySearch([4, 59, 201, 467], 56)).toBe(-1)
  })

  it('should return 0 when the target element is in the first postion', () => {
    expect(binarySearch([67], 67)).toBe(0)
  })

  it('should return 2 when the target element is in the third postion', () => {
    expect(binarySearch([10, 12, 45, 55, 66, 67, 100], 45)).toBe(2)
  })
})

