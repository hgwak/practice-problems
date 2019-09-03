function invert_negatives(someNum) {
    if (typeof someNum === 'string') {
        return false;
    }
    if (Math.sign(someNum) === 1) {
        return -Math.abs(someNum);
    } else {
        return someNum;
    }
}