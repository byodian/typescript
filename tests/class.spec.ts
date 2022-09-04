import { C } from '@src/class/basic'

describe('classes in TypeScript', () => {
  it('Getter / Setters', () => {
    const c = new C()
    expect(c.length).toBe(0)
  })
})
