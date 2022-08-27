function greeter(fn: (arg: string) => void) {
  fn('hello world')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)

// type alias
type GreetFunction = (arg: string) => void
export function greeterWithTypeAlias(fn: GreetFunction) {
  fn('hello world')
}
