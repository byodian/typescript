// Generally it's better to store indexed date in another place instead of on
// the class instance itself.

class MyClass {
  [s: string]: boolean | ((s: string) => boolean)

  constructor(name: boolean) {
    this.name = name
  }

  check(s: string) {
    return this[s] as boolean
  }
}
