function f(x) {
    if (typeof x === 'number') {
        return x * x * x;
    } else {
        throw new Error('parameter type is not a Number');
    }
}

console.log(f(2));
console.log(f('Content'));