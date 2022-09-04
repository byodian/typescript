//  public static fields
class ClassWithStaticField {
  static baseStaticField = 'static field'
  static anotherBaseStaticField = this.baseStaticField

  static baseStaticMethod() {
    return 'base static method output'
  }
}

console.log(ClassWithStaticField.baseStaticField)

// Public static fields are not reinitialized on subclasses, but can be accessed
// via the prototype chain.

// When initializing fields, `this` refers to the class constructor. You can
// also reference it by name, and use `super` to get the superclass constructor
// (if one exists)
class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod()
}
console.log(SubClassWithStaticField.subStaticField)
