function isEmpty (elements) {
  return elements.length === 0
}

function isSizeOdd (expression) {
  return expression.length % 2 === 1
}

function isOpenBrace (brace) {
  return ['(', '[', '{'].includes(brace)
}

function isMatchPair (options) {
  const [
    currentBrace,
    stackTop,
    closeBrace,
    openBrace
  ] = options

  return currentBrace === closeBrace
          && stackTop === openBrace
}

function isPair (currentBrace, stack) {
  const top = stack.pop()

  return isMatchPair([currentBrace, top, ')', '('])
          || isMatchPair([currentBrace, top, ']', '['])
          || isMatchPair([currentBrace, top, '}', '{'])
}

function isExpressionBalanced (expression) {
  if (isEmpty(expression) || isSizeOdd(expression)) {
    return false
  }

  const stack = []

  for (const brace of expression) {
    if (isOpenBrace(brace)) {
      stack.push(brace)
      continue
    }

    if (isEmpty(stack) || !isPair(brace, stack)) {
      return false
    }
  }

  return isEmpty(stack)
}

module.exports = {
  isExpressionBalanced
}
