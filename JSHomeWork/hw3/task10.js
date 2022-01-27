function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('1st parameter type should be a array');
    } else if (arr.length === 0) {
        throw new Error('Array can\'t be empty');
    }

    let result = new Array();
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

const arr = [3, 2, 1];
console.log(reverse(arr));