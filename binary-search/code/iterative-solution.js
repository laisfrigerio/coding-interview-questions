function binarySearch (list, target) {
    let begin = 0
    let end = list.length - 1

    while (begin <= end) {
        const middleIndex = Math.floor((begin + end) / 2)

        if (list[middleIndex] === target) {
            return middleIndex
        }

        if (target > list[middleIndex]) {
            begin = middleIndex + 1
            continue
        }

        end = middleIndex - 1
    }

    return -1
}

module.exports = {
    binarySearch
}
