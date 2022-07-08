const isExpressionBalanced = function (s) {
    if (s == '') {
        return false
    }
    if (s.length < 2) {
        return false
    }
    const pairBrkts = {
        "{": "}",
        "(": ")",
        "[": "]",
    }

    let stk = []
    let arr = s.toString().split("")

    for (let i = 0; i < arr.length; i++) {
        let br = arr[i]
        if (pairBrkts[br]) { // se for de abertura
            stk.push(br)
        } else {
            let chkBr = stk.pop()
            if (pairBrkts[chkBr] !== br) {
                return false
            }
        }
    }

    if (stk.length > 0) {
        return false
    }

    return true
};

module.exports = {
    isExpressionBalanced
}