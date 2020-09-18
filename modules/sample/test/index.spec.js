import fn from '../src/index.js'

describe('Uppercase module', () => {
  test('fn() uppercases a string', () => {
    const res = fn({ payload: 'Hello World!' })
    expect(res).toBe('HELLO WORLD!')
  })
})
