// `protected` members are only visible to subclasses of the class they're declared in.
// property is protected and only accessible within class and its subclasses.

class Base {
  protected x = 1

  f1(other: Base) {
    other.x = 3
  }
}

class Derived1 extends Base {
  protected x = 5

  f1(other: Derived1) {
    other.x = 3
  }
}

class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10
  }

  f2(other: Base) {
    other.x = 5
  }
}
