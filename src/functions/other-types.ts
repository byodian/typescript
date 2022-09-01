// void - It's the inferred type any time a function doesn't have any `return` statements, or doesn't return any explicit value from those return statements
// In JavaScript, a function that doesn't return any value will implicitly
// return the value `undefied`. But void is not the same as undefined.

// The inferred return type is void
export function noop() {
  // return
}

// primitive (string, number, bigint, boolean, symbol, null or undefined)
//  object, function types are considered to be objects in TypeScript

// unknown - the unknown type represents any value.
// This is similar to the any type, but is safer because it's not legal to do
// anything with an unknown value
export function f1(a: any) {
  a.b() // OK
}

export function f2(_a: unknown) {
  // object is of type of 'unknown'
  // _a.b()
}

export function safeParse(s: string): unknown {
  return JSON.parse(s)
}

// never - some functions never return a value
export function fail(message: string): never {
  throw new Error(message)
}

// Function
// If you need to accept an arbitrary function but don't intend to call it, the type () => void is generally safer.
// export function doSomething(fn: Function) {
//   return fn([1, 2, 3])
// }

// Rest Parameters and Arguments
export function multiply(n: number, ...m: number[]) {
  return m.map(x => n * x)
}

const args = [4, 4] as const
export const angle = Math.atan2(...args)

// Parameter Destructuring
type ABC = {
  a: number;
  b: number;
  c: number;
}

export function sum({ a, b, c }: ABC) {
  return a + b + c
}
