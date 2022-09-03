// keyof Type Operator
// The `keyof` operator takes an object type and produces a string or numeric
// literal union of its key.

type Point = { x: number; y: number; 1: number }
type P = keyof Point // 'x' | 'y' | 1

export const a: P = 'x'
export const b: P = 1

// If the type has a `string` or `number` index sigature, `keyof` will return
// those types instead
type Arrayish = {
  [n: number]: unknown;
}

export type A = keyof Arrayish // type A = number

type Mapish = {
  [k: string]: boolean;
}

// JavaScript object keys are always coerced to a sting, so obj[0] is always the
// same as obj["0"]
export type M = keyof Mapish // type M = string | number
