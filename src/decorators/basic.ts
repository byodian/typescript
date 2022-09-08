function f(C: any) {
  console.log('apply decorator')
  return C
}

@f
class A {}
