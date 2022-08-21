export interface People {
  name: string;
  age: number;
}

function identity<T>(arg: T): T {
  return arg
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.warn(arg.length)
  return arg
}

loggingIdentity<number>([1, 3])
