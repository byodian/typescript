function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(input1: string, input2: string) {
  return input2 + input1
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result =  n1 + n2
  cb(result)
}

let combineValues: (n1: number, n2: number) => number
combineValues = add

combineValues(1, 2)
addAndHandle(1, 2, (result) => {
  console.log(result)
})