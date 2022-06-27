function isExpressionBalanced (expression) {
  if (expression.length === 0 || expression.length % 2 === 1) {
    return false
  }

  const size = expression.length
  const stack = []

  for (let index = 0; index < size; index++) {
    const element = expression[index]

    if (element === '(' || element === '[' || element === '{') {
      stack.push(element)
    } else {
      const top = stack.pop()
      
      if (element === ')' && top !== '(') {
        return false
      } else if (element === ']' && top !== '[') {
        return false
      } else if (element === '}' && top !== '{') {
        return false
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isExpressionBalanced
}
