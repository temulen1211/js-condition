let a = prompt('a toog ugnu uu!');
let b = prompt('b toog ugnu uu!');
let c = prompt('c toog ugnu uu!');
let numberArr = [a, b, c];

let highest = Math.max(...numberArr);

let lowest = Math.min(...numberArr);

console.log(+lowest);
console.log(+highest);