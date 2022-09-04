// an `implements` doesn't change the clas type
// implementing an interface with an optional property doesn't create that
// property

interface A {
  x: number;
  y?: number;
}

class C implements A {
  x = 0
}
