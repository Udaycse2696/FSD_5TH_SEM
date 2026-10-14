let arr = [1,2,3,4,5,6,7,8,9,10];
arr.map((data) =>console.log(data));

let multipliedArr = arr.map((data) => data*5);
console.log(multipliedArr);

const divisibleByFive = arr.filter((data) => data%5 === 0);
console.log(divisibleByFive);

const firstDivisibleByFive = arr.find((data) => data%5 === 0);
console.log(firstDivisibleByFive);

const sumofArr = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumofArr);