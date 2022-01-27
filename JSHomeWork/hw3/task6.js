function reduceRight(arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    } else if (typeof cb !== 'function') {
        throw new Error('2nd parameter should be a function');
    } else if (typeof acc !== 'string' && typeof acc !== 'number') {
        throw new Error('3nd parameter should be a string or number');
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        acc = cb(acc, arr[i])
    }

    return acc;
}

//const arr = [1, 2, 3];
const arr = ['a', 'b', 'c'];
//const acc = 0;
const acc = '';
console.log(reduceRight(arr, function (sum, current) {
    return sum + current
}, acc));