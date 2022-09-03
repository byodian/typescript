interface People {
  name: string;
  age: number;
}

export function greet(person: People) {
  return `Hello ${person.name}`
}

// Property Modifiers
// optional property
type Shape = {
  name: string;
  area: number;
}

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

export function paintShape(opts: PaintOptions) {
  const xPos = opts.xPos
  console.log(xPos, opts)
}

const users = [
  { name: 'oby', age: 23 },
  { name: 'heera', age: 32 },
]

declare const loggedInUsername: string
const loggedInUser = users.find(u => u.name === loggedInUsername)
console.log(loggedInUser)

// Index Signatures
// Sometimes you don't know all the names of a type's properties ahead of time,
// but you do know the shape of the values
type StringArray = {
  [index: number]: string;
}

const myArray: StringArray = ['bob', 'byo']
export const secondItem = myArray[1]

interface NumbersName {
  [key: number]: string;
}

export const names: NumbersName = {
  1: 'one',
  2: 'two',
}

// extends
// intersection types
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle
// interfaces vs. intersections
// The principle difference between the two is how conflicts are handleed.

interface ColorfulCircle2 extends Colorful, Circle {}

function draw1(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`)
  console.log(`Radius was ${circle.radius}`)
}

draw1({ color: 'blue', radius: 42 })
draw1({ color: 'blue', radius: 42 })
