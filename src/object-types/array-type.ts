// Whenever we write out types like `number[]` or `string[]`, that's realy just
// a shorthand for `Array<number>` and `Array<string>`
// `Array` itself is a generic type.
export function doStuff(values: ReadonlyArray<string>) {
  const copy1: ReadonlyArray<string> = values.slice()
  const copy2: readonly string[] = values.slice()
  console.log(`The first value is ${copy1[0]} ${copy2[0]}`)
}

export const pairs = [3, 4] as const
