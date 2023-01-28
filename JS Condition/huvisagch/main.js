//1.

let numbers = { 
    a: 85,
    b: 75,
    c: 96,
    d: 69
};

let num = (numbers > 80);
let sum = 0;


if(numbers.a > 80) {
   console.log(num =  (sum + numbers.a));
} else {
   num = sum;
};
if(numbers.b > 80) {
    console.log(num = (sum + numbers.a + numbers.b));
} else {
    num = sum;   
};
if(numbers.c > 80) {
   console.log(num = (sum + numbers.a + sum + numbers.c));
} else {
    num = sum;   
};
if(numbers.d > 80) {
    console.log(num = (sum + numbers.a + numbers.b + numbers.c + numbers.d));
} else {
    num = sum;   
};
 

//2.
let num1 = {
    A: 3,
    B: 7,
    C: 2,
    D: 4
};

const num2 = 1;
let urjver;


if(num1.A < 5) {
    console.log(urjver = num2 * num1.A)
} else {
    num1.A = 1;
};
if(num1.B < 5) {
    console.log(urjver = num2 * num1.A * num1.B)
} else {
    num1.B = 1;
};
if(num1.C < 5) {
    console.log(urjver = num2 * num1.A * num1.B * num1.C)
} else {
    num1.C = 1;
};
if(num1.D< 5) {
    console.log(urjver = num2 * num1.A * num1.B * num1.C * num1.D)
} else {
    num1.D = 1;
};
