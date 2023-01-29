//1.

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //false  => true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //true  => false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

//2.

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true

//3.

const myAge = 34;
let yourAge =(prompt('Nasaa oruulna uu!'));

if(yourAge > myAge) {
    console.log('Ta yum bn');
} else if(yourAge < myAge) {
    console.log('Nadaas duu');
} else {
    console.log('Nas chatsuu hamaa');
};
console.log('\n');

//4.

let day =(prompt('Ta 1-7 dahi uduruu oruulna uu!'));

if(day <= 5) {
    console.log('It\'s a weekday! back to work and study!');
} else if(day > 7) {
    console.log('invalid data');
} else {
    console.log('It\'s a weekend! have a sleep!');
};
console.log('\n');

//5.

let hours = 40;
let ratePerHour = 28;
let yourHours = (prompt('Ta ajillasan tsagaa oruulna uu!'));

let wage = (hours * ratePerHour);
let yourWage = (yourHours * ratePerHour);

if((yourHours * ratePerHour) > (hours * ratePerHour)) {
    console.log(`Ta sain ajillajee! Tanii ${yourWage} tsalin dundaj ${wage} tsalingaas davjee!`);
} else if((yourHours * ratePerHour) == (hours * ratePerHour)) {
    console.log(`Ta hudulmuriin dundaj tsalin ${wage} awna`);
} else {
    console.log(`Tanii ${yourWage} tsalin dundaj hudulmuriin ${wage} tsalind hurehgui bn!`);
};
