if (val == 'a') {
    console.log('a');
} else if (val && val.length == 1 && val >= 'b' && val <= 'e') {
    console.log('others');
} else {
    console.log('unknown');
}