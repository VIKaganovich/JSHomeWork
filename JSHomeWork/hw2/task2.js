function f() {
    var sum = 0;

    for (let number of arguments) {
        if (typeof number === 'number') {
            sum += number;
        } else {
            throw new Error('all parameters type should be a Number');
        }
    }

    return sum;
}

console.log(f(1, 2, 3));
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));
console.log(f(1, 2, 's', 4));