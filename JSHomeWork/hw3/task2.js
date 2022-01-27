function filter(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    } else if (typeof cb !== 'function') {
        throw new Error('2nd parameter should be a function');
    }

    let result = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) result.push(arr[i]);
    }

    return result;
}

const arr = [1, 2, 3];
console.log(filter(arr, function (item) {
    return item % 2 !== 0
}));
