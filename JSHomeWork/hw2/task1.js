function cubing(x) {
    if (typeof x === 'number') {
        return x * x * x;
    } else {
        throw new Error('parameter type is not a Number');
    }
}

console.log(cubing(2));
console.log(cubing('Content'));