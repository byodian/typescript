// In JavaScript, functions can have properites in addition to being callable.
// However, the function type expression syntax doesn't allow for declaring
// properites.

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

export function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description} returned ${fn(6)}`)
}

const df: DescribableFunction = (n: number) => !!n
df.description = 'print a boolean'

doSomething(df)
