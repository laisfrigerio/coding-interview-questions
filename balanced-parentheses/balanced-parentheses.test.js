const { isExpressionBalanced } = require('./good-solution')

describe('parentheses expression is balanced', () => {
  it('should return true when expression equal to ()', () => {
    expect(isExpressionBalanced('()')).toBe(true)
  })

  it('should return true when expression equal to ([]){}', () => {
    expect(isExpressionBalanced('([]){}')).toBe(true)
  })

  it('should return true when expression equal to ([{}])', () => {
    expect(isExpressionBalanced('([{}])')).toBe(true)
  })

  it('should return true when expression equal to ([{}]){()}[](){}', () => {
    expect(isExpressionBalanced('([{}]){()}[](){}')).toBe(true)
  })

  it('should return true when expression equal to {[{}{}]}[()]', () => {
    expect(isExpressionBalanced('{[{}{}]}[()]')).toBe(true)
  })
})

describe('parentheses expression is not balanced', () => {
  it('should return false when empty expression', () => {
    expect(isExpressionBalanced('')).toBe(false)
  })

  it('should return false when expression equal to )(', () => {
    expect(isExpressionBalanced(')(')).toBe(false)
  })

  it('should return false when expression equal to )', () => {
    expect(isExpressionBalanced(')')).toBe(false)
  })

  it('should return false when expression equal to ([', () => {
    expect(isExpressionBalanced('([')).toBe(false)
  })

  it('should return false when expression equal to ([}', () => {
    expect(isExpressionBalanced('([}')).toBe(false)
  })

  it('should return false when expression equal to ([]}', () => {
    expect(isExpressionBalanced('([]}')).toBe(false)
  })

  it('should return false when expression equal to {()}[)', () => {
    expect(isExpressionBalanced('{()}[)')).toBe(false)
  })

  it('should return false when expression equal to ([]{}]', () => {
    expect(isExpressionBalanced('([]{}]')).toBe(false)
  })
})
