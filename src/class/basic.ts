// There are just a few differences between class constructor signatures and function signatures:
// 1. Constructor can't have type parameters - these belong on the outer class declaration
// 2. Constructor can't have return type annotations - the class instance type is always what's returned.
export class Point {
  // Constructor type parameters
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  scale(n: number): void {
    this.x *= n
    this.y *= n
  }

  area(): number {
    return this.x * this.y * this.z
  }
}

export class Greeter {
  // This prevents assignments to the field outside of the constructor
  readonly name: string = 'world'
  constructor(otherName?: string) {
    if (otherName !== undefined)
      this.name = 'hello'
  }
}

export class C {
  _length = 0
  get length() {
    return this._length
  }

  set length(value) {
    console.log('new value', value)
    this._length = value
  }
}
