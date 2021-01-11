
exports.min = function min (array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0
    }
    array.sort((a, b) => a - b)
  return array[0];
}

exports.max = function max (array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0
    }
    array.sort((a, b) => b - a)
  return array[0];
}

exports.avg = function avg (array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0
    }
    let sum = array.reduce((a, b) => a + b)
    return sum/array.length
}
