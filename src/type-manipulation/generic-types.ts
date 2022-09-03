// Generic Function
function identity<Type>(arg: Type): Type {
  return arg
}

export const myIdentity1: <Type>(arg: Type) => Type = identity
export const myIdentity2: { <Type>(arg: Type): Type } = identity

// Generic Interface
interface GenericIdentityFn {
  // type parameter in call signature
  <Type>(arg: Type): Type;
}

export const myIdentity3: GenericIdentityFn = identity

// move the generic parameter to be a parameter of the whole interface. This
// makes the type parameter visible to all the other members of the interface
//
// Understanding when to put the type parameter directly on the call signature
// and when to put it to the interface itself will be helpful in describing what
// aspects of a type are generic.

// Generic Interface
// type parameter in interface
interface GenericIdentityFunc<Type> {
  (arg: Type): Type;
}

export const myIdentity4: GenericIdentityFunc<number> = identity

// Generic Classes

// Generic Constraints
export function loggingIdentityWithError<Type>(arg: Type): Type {
  // console.log(arg.length) // Error: Property 'length' does not exist on type 'Type'
  return arg
}

export function loggingIdeneityCorrect<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

// Using Class Types in Generic
// Using Type Parameters in Genecir Function
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

const x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')
