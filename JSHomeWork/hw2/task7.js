function getDivisors(x) {
    if (!(typeof x === 'number')) {
        throw new Error('parameter type is not a Number');
    } else if (!Number.isInteger(x)) {
        throw new Error('parameter should be a Integer');
    } else if (x === 0) {
        throw new Error('parameter can\'t be a 0');
    }

    let result = [1];

    if (x === 1) {
        return result;
    }

    for (let i = 2; i <= x / 2; i++) {
        if (x % i === 0) {
            result.push(i);
        }
    }
    result.push(x);

    return result;
}

console.log(getDivisors(12));
//console.log(getDivisors('Content'));
console.log(getDivisors(0));
