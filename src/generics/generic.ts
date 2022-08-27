export function identity<T>(arg: T): T {
  return arg
}

export function loggingIdentity<T>(arg: T[]): T[] {
  console.warn(arg.length)
  return arg
}

export function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  return arg
}

export const myIdentity: <T>(arg: T) => T = identity

export const myIdentity2: { <T>(arg: T): T } = identity
