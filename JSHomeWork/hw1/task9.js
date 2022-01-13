var arr = [1, 2, 3, 4, 5, 6];

for (let i = 1; i < arr.length; i++) {
    let swap = false;

    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let tmpnum = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmpnum;
            swap = true;
        }
    }

    if (!swap)
        break;
}

console.log(arr);