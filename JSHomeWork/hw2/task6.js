function isEven(x) {
    if (!(typeof x === 'number')) {
        throw new Error('parameter type is not a Number');
    } else if (!Number.isInteger(x)) {
        throw new Error('parameter should be a Integer');
    }

    return x % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));