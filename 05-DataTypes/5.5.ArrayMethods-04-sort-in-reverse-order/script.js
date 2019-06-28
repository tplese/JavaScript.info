let arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    };
}

arr.sort(compareNumeric);
arr.reverse();

alert( arr ); // 8, 5, 2, 1, -10