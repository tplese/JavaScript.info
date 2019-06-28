let startingArray = [5, 3, 8, 1]

function filterRange(arr, a, b) {
    return arr.filter( item => (item >= a && item <= b) );
}

filterRange(startingArray, 1, 4);