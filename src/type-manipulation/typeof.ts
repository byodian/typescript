function f() {
  return { x: 10, y: 2 }
}

export type P = ReturnType<typeof f>
