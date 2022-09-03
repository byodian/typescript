// Generic Object Types
interface Box<Type> {
  contents: Type;
}

export const box: Box<string> = {
  contents: 'hello world',
}
// Since type aliases, unlike interface, can describe more than just object types, we can
// also use them to write other kinds of generic helper types.
export type OrNull<Type> = Type | null
export type OneOrMany<Type> = Type | Type[]
export type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
export type OneOrManyOrNullStrings = OneOrManyOrNull<string>

export const oneString: OneOrManyOrNullStrings = 'hello wolrd'
export const manyStrings: OneOrManyOrNullStrings = ['12', '23', '34']
