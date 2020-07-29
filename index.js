function reverse(x) {
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
}
