function isPositvie(x) {
    if (typeof x === 'number') {
        return x > 0 ? true : false;
    } else {
        throw new Error('parameter type is not a Number');
    }
}

var arr = [1, 2, -4, 3, -9, -1, 7];
var result = [];

for (let number of arr) {
    if (isPositvie(number))
        result.push(number);
}

console.log(result);
