// constructor signature
type SomeConstructor = {
  new(s: string): Date;
}

export function fn(Ctor: SomeConstructor) {
  return new Ctor('2020-01-01')
}

interface CallorConstruct {
  new (s: string): { x: number };
  (n?: number): number;
}

export function fn2(Ctor: CallorConstruct) {
  return new Ctor('2020-01-01')
}
