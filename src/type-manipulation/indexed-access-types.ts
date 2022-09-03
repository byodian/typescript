type Person = { age: number; name: string; alive: boolean }
export type Age = Person['age']
export type I1 = Person['age' | 'name']
export type I2 = Person[keyof Person]
type AliverOrName = 'alive' | 'name'
export type I3 = Person[AliverOrName]

// Another example of indexing with an arbitrary type is using `number` to get
// the type of an array's elements.

// combine this with `typeof` to conveniently capture the element type of an
// array literal.
const myArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]

export type People = typeof myArray[number]

const key = 'age'
export type Age2 = Person[typeof key]
export type Age3 = typeof key
