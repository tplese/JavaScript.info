"use strict";

let mainArray = [2, -1, 2, 3, -9];

function getMaxSubSum(arr) {
    let maxSum = 0;
    let nextSum = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > 0) {
            maxSum = arr[i];
            nextSum = arr[i]
            break;
        };

        i++;
    };

    for (let j = i + 1; j <= arr.length; j++) {
        nextSum += arr[j];

        if (nextSum >= maxSum || (nextSum > 0 && getFutureSum(arr, j) > 0) ) {
            maxSum = Math.max(nextSum, maxSum);
        } else {
            nextSum = 0;
        };
    };
 
    return maxSum;
}

function getFutureSum(arr, start) {
    let sum = 0;
    
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i];
        } else {
            sum += arr[i];
            break;
        };
    };
    
    return sum;    
}

console.log( getMaxSubSum(mainArray) );