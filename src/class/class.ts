export class Point {
  readonly name: string = 'world'

  constructor() {
    this.name = 'hello'
  }
}

interface Pingable {
  ping(): void;
}

export class Sonar implements Pingable {
  ping() {
    console.warn('ping')
  }

  pong() {
    console.warn('pong')
  }
}

export interface Checkable {
  check(name: string): boolean;
}

export class NameChecker implements Checkable {
  check(s: string) {
    return s.toLowerCase() === 'ok'
  }
}

export class Base {
  name = 'base'

  constructor() {
    console.log(`my name is ${this.name}`)
  }
}

export class Derived extends Base {
  name = 'derived'
}

const d = new Derived()
console.log(d.name)

export class Greeter {
  public greet() {
    console.log(`hello, ${this.getName()}`)
    return 'hello'
  }

  protected getName() {
    return 'hi'
  }
}

export class SpecialGreeter extends Greeter {
  public howdy() {
    console.log(`howdy, ${this.getName()}`)
  }

  f(other: SpecialGreeter) {
    other.getName()
  }
}

export class MyClass {
  private static x = 0
  static printX() {
    console.log(MyClass.x)
  }
}
