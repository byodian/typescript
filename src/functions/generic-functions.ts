// In TypeScript, generic are used when we want to describe a `correspondence` (相似性？)
// between two values. We do this by declaring a `type parameter` in the
// function signature

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

// Specifying Type Arguments
// TypeScript can usually infer the intended type arguments in a generic call，
// but not always
// For example: combine([1,2,3], ["hello"]) - Error: Type 'string' is not assignable to
// type 'number' -> fix: combine<numebr | string>([1,2,3], ['hello'])
export function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

// Guidelines for writing good generic functions
// Rule1: When possible, use the type parameter itself rather than constraining it.
// Rule2: Always use as few type parameters as possible.
// Rule3: If a type parameter only appears in one location, strongly reconsider
// if you actually need it.

// Push Type parameters Down - make good ues of type inferred
// good one
export function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

// bad one
export function firstElement2<T extends any[]>(arr: T) {
  return arr[0]
}

// Use Fewer Type parameters
// good one
export function filter1<T>(arr: T[], func: (arg: T) => boolean): T[] {
  return arr.filter(func)
}

// bad one
export function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func,
): Type[] {
  return arr.filter(func)
}

// Type Parameters Should Appear Twice
// Remember, type parameters are for relatign the types of multiple values. If a
// type parameter is only used once in the function signature, it's not relating
// anything.
export function greet1<Str extends string>(s: Str) {
  console.log(`hello, ${s}`)
}

// we could have written a simpler version
export function greet2(s: string) {
  console.log(`hello, ${s}`)
}
