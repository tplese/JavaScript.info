let vals = [0, 1, 1];

function fibb(n) {
return vals[n] === undefined ? vals[n] = fibb(n-1) + fibb(n-2) : vals[n];
}

console.log(fibb(77));

// 1 1 2 3 5 8