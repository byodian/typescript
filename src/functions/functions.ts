export function printResult(input1: string, input2: string) {
  return input2 + input1
}

export function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

// Function Type Expressions
type GreetFunction = (a: string) => void
export function greeter(fn: GreetFunction) {
  fn('hello world')
}

function printToConsole(s: string) {
  console.warn(s)
}

greeter(printToConsole)

// Call Signtures
type DescribableFunction = {
  description: string;
  (arg: number): number;
}

export function doSomething(fn: DescribableFunction) {
  console.warn(`${fn.description} returned ${fn(2)}`)
}

// Inference
export function map<T, U>(arr: T[], fn: (arg: T) => U): U[] {
  return arr.map(fn)
}

map(['1', '2', '3'], n => parseInt(n))

// function overloads
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined)
    return new Date(y, mOrTimestamp, d)

  else
    return new Date(mOrTimestamp)
}

export const d1 = makeDate(12345678)
export const d2 = makeDate(5, 5, 5)
export const d3 = makeDate(1, 3, 4)

