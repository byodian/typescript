class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise.`)
  }

  static getName() {
    console.log('Animal')
  }
}

function Animal2(name) {
  this.name = name
}

Animal2.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`)
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  speak() {
    super.speak()
    console.log(`${this.name} barks.`)
  }
}
