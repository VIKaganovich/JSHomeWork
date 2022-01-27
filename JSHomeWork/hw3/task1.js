function forEach(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    } else if (typeof cb !== 'function') {
        throw new Error('2nd parameter should be a function');
    }

    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const arr = [1, 2, 3];
forEach(arr, function (item, i, arr) {
    console.log(i + ': ' + item + '; ' + arr)
});

