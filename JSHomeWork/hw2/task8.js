function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    } else if (!arr.length) {
        throw new Error('parameter can\'t be an empty');
    } else {
        console.log(arr.shift());
        if (arr.length) {
            f(arr);
        }
    }

}

var arr = [1, 2, 3];
f(arr);
f('Content');
//f(1,2,3)
//f([]);