import { combine, filter1, filter2, firstElement, lonest, map } from '@src/functions/generic-functions'

describe('Generic Functions', () => {
  test('Get the 1 number from [1, 2, 3]', () => {
    expect(firstElement([1, 2, 3])).toBe(1)
  })

  test('functions which have multiple type parameter', () => {
    expect(map<string, number>(['1.23', '2.34', '3.34'], n => parseInt(n))).toEqual([1, 2, 3])
  })

  test('Working with constrained values', () => {
    expect(lonest([1, 2, 3], [1, 2])).toEqual([1, 2, 3])
  })

  test('Specifying type arguments', () => {
    const arr = combine<number | string>([1, 2, 3], ['hello'])
    expect(arr).toEqual([1, 2, 3, 'hello'])
  })

  test('User fewer type parameter the good one', () => {
    expect(filter1([2, 3, 4, 5, 6], n => n % 2 === 0)).toEqual([2, 4, 6])
  })

  test('User fewer type parameter the bad one', () => {
    expect(filter2([1, 2, 3, 4, 5, 6, 7, 8], n => n % 2 === 0)).toEqual([2, 4, 6, 8])
  })
})
