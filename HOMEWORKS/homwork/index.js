//! task 1

let firstname = "Lata";

console.log(firstname);

//!task 2  

//? Which value does x have after execution of the following code? 

let x = "Geeta";

console.log('Geeta');

"Geeta"


//! task 3 

//?  Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.

let flower = "rose";
let tree = "maple";

console.log(flower);
console.log(tree);


//! task 4

//? Which value does x have after execution of the following code?

let x1 = 'Tic';
x = 'Tac';
x = 'Toe';

//! x = 'Toe'


//! task 5

//?  Which value does x have after execution of the following code?

let x2 = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;

//! 'Hardy'


//! task 6

//?Define a function hello that returns 'Hello world!'.


function hello() {
    return 'Hello world!';
}
result = hello();


//! task 7

//?Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.

function a() {
    return 'Hello a!';
}
function b() {
    return 'Hello b!';
}
console.log(a());
console.log(b());


//! task 8 
//? 1. Define a function greet returning the value 'Haydo!'.
//? 2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.


function greet() {
    return "Haydo!"
}
let salutation = greet();

console.log(salutation);



//! task 9

//? Which value does x have after execution of the following code?

function hello() {
    return 'Hi!';
}

let x3 = hello();

console.log(x3);

// Hi!


//! task 10

//? Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'

function echo(Gretta) {
    return Gretta;

}
function echo1(CO2) {
    return CO2;

}
