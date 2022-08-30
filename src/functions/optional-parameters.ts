export function fn(x = 10) {
  console.log(x.toFixed())
}

// Optional Parameters in Callbacks
export function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++)
    callback(arr[i], i)
}

myForEach([1, 2, 3], (_, i) => {
  // get a issue error that is Object is possibly 'undefined'.
  // console.log(i.toFixed())
  console.log(i?.toFixed)
})

// When writing a function type for a callback, **never** write an optional
// parameter unless you intend to call the function without passing that
// argument
