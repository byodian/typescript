// inference - multiple type parameters
export function map<T, U>(arr: Array<T>, func: (arg: T) => U): U[] {
  return arr.map(func)
}

// We've written some generic functions that can work on any kind of value.
// Sometimes we want to relate two values, but can only operate on a certain
// subset of values.
// We constrain the type parameters to that type by writing an `extends` clause:
export function lonest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length)
    return a

  else
    return b
}

export function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

// Guideline for writing good generic functions
// Rule: When possible, use the type parameter itself rather than constraining it

// good
export function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

// bad
export function firstElement2<T extends any[]>(arr: T) {
  return arr[0]
}

// Use Fewer Type parameters

