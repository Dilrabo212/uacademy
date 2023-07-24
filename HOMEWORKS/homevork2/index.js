//! task 1

//? Create a function that takes length and width and finds the perimeter of a rectangle.



function findPerimeter(leangth, width) {

    return 2 * (leangth + width);

}

console.log(findPerimeter(2, 9));

//! task 2

//? Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {

    area = (base * height) / 2

    return area;

}
console.log(triArea(2, 3));


//!task 3

//? Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.


function nextEdge(side1, side2) {

    const sideSum = side1 + side2;
    const maxRange = sideSum - 1;
    return maxRange;

}
console.log(nextEdge(8, 10));


//! task 4

function squared(num) {
    return num ** 2;
}
console.log(squared(5));

//! task 5

//? Write a function that converts hours into seconds.


function howManySeconds(hours) {

    return hours * 3600;

}

console.log(howManySeconds(2));



//! task 6

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function getRemainder(num1, num2) {
    return num1 % num2;
}
console.log(getRemainder(1, 3));


//!  task 7

//? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.


function lessThanOrEqualToZero(num) {

    if (num <= 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log(lessThanOrEqualToZero(0));

//!  task 8


function nameString(name) {
    let b = "Edabit";

    let result = name + b;
    return result;
}
console.log(nameString("Matt"));


//! task 9

//? Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).



function sumPolygon(n) {

    return (n - 2) * 180;

}
console.log(sumPolygon(3));



//! task 10

//? Write a function that returns the string "something" joined with a space " " and the given argument a.


function giveMeSomething(a) {

    return "something " + a;

}
console.log(giveMeSomething("is better than nothing"));