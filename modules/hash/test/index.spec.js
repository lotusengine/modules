import fn from '../src/index.js'

describe('Hash module', () => {
  test('fn() creates hash from object', () => {
    const res = fn({ }, { greeting: 'Hello World!' })
    expect(res).toBe('133cad54bd7f68eb6420c49a926f3bde09b95a28')
  })
})
