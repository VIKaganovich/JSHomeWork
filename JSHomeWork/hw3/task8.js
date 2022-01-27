function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    }

    arr = arr.flat(Infinity);

    if (arr.some(function (item) {
        return typeof item !== 'number'
    })) throw new Error('1st parameter type should be a array that contains arrays with numbers');

    return arr.reduce(function (sum, current) {
        return sum + current
    }, 0);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2));
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3));
const arr4 = [[[[[]]]]];
console.log(f(arr4));
const arr5 = [[[[[],3]]]];
console.log(f(arr5));