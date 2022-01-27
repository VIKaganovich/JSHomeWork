function some(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    } else if (typeof cb !== 'function') {
        throw new Error('2nd parameter should be a function');
    }


    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) return true;
    }

    return false;
}

const arr = [1, 2, 3];
console.log(some(arr, function (item) {
    return item % 2 === 0
}));