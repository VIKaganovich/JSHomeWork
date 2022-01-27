function arrayFill(filler, len) {
    if (typeof filler !== 'number' && typeof filler !== 'string' && typeof filler !== 'object') {
        throw new Error('1st parameter type should be a number or string or object or array');
    } else if (typeof len !== 'number') {
        throw new Error('2nd parameter should be a number');
    }

    let result = new Array(len);
    result.fill(filler);
    return result;
}

console.log(arrayFill('x',5));
