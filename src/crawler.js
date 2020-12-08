// const axios = require('axios');
// const cheerio = require('cheerio');

// axios.get('https://www.sakaajira.com')
//     .then(response => {
//         console.log(response.data);
//         const $ = cheerio.load(response.data)
//     })
//     .catch(error => {
//         console.log(error);
//     })

// writing an algorithim that returns odd or even numbers
function testNum(num) {
    let res = num % 2
    if (res === 0){
        return "even"
    } else {
        return "odd"
    }
    // return num % 2 ? "odd" : "even"
}

console.log(testNum(46))

// writing algorithim to sum numbers in an array
function sumNumbers(numbers) {
    let sum = 0
    for (let i in numbers) {
        sum += numbers[i]
    }
    return sum
}

const arr = [1,2,3,4,5]

console.log(sumNumbers(arr));

// write algorithim that finds the smallest number in an array
function smallNumber(numbers) {
    let sorted = numbers.sort((a, b) => a - b) 
    return sorted[0]
}

// for largest number use reverse (b - a)

const arr2 = [3,5,6,1,7,-6]

console.log(smallNumber(arr2));

// writing a function that adds numbers in two arrays together
function sumMerged(arr, arr2) { 
    let merged = arr.concat(arr2)
    let sum = 0
    for (let i in merged) {
        sum += merged[i]
    }
    return sum
}

console.log(sumMerged(arr, arr2));

console.log(arr.pop());
