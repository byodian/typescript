// Public instance fields exist on every created instance of a class.
// By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.

// Public instance fields are added with `Object.defineProperty` either at
// constructor time in the base class (before the constructor body runs), or
// just after `super()` returns in a subclass.

// Note that instance fields are set on the instance instead of the
// constructor's `prototype`, so you can't use `super` to access the instance field of a superclass.

// You can access the fiels' values within the base clas constructor.
class ClassWithInstanceField {
  instanceField = 'instance field'

  constructor() {
    console.log(this.instanceField)
    this.instanceField = 'new value'
  }
}

const instance = new ClassWithInstanceField() // Logs "instance field"
console.log(instance.instanceField) // "new value"

// However, because instance fields of a derived class are defined after `super()` returns, the
// base class's constructor does not have access to the derived class's fields.
class Base {
  constructor() {
    console.log('Base constructor: ', this.field)
  }
}

class Derived extends Base {
  field = 1
  constructor() {
    super()
    console.log('Derived constructor:', this.field)
  }
}

const instance1 = new Derived()
