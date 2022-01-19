function f(x) {
    if (!(typeof x === 'number')) {
        throw new Error('parameter type is not a Number');
    } else if (!Number.isInteger(x)) {
        throw new Error('parameter should be a Integer');
    } else if (x < 1 || x > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    let result;

    switch (x) {
        case 1:
            result = 'Воскресенье';
            break;
        case 2:
            result = 'Понедельник';
            break;
        case 3:
            result = 'Вторник';
            break;
        case 4:
            result = 'Среда';
            break;
        case 5:
            result = 'Четверг';
            break;
        case 6:
            result = 'Пятница';
            break;
        case 7:
            result = 'Суббота';
    }

    return result;
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
//console.log(f('1'));