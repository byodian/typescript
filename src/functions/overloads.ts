// Some JavaScript functions can be called in a variety of argument counts and
// types. For example, the `Date` object

// In TypeScript, we can specify a function that can be called in different ways
// by writing `overload signatures`.

// To do this, write some number of function signatures (usually two or more),
// followed by the body of the function:
//
// Functions have an implementation signature, but this signature can't be
// called directly.

export function makeDate(timestamp: number): Date
export function makeDate(m: number, d: number, y: number): Date
export function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined)
    return new Date(y, mOrTimestamp, d)

  else
    return new Date(mOrTimestamp)
}

// Overload signatures and the implementation signature
// The signature of the implementation is not visible from the outside.
// The implementation signature must also be compatible with the overload
// signature.
export function fn(x: boolean): void
export function fn(x: string): void
export function fn(x: boolean | string) {
  console.log(x)
}

// Writing Good Overloads
// Always prefer parameters with union types instead of overloads when possible
