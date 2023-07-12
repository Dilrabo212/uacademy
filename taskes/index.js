



//! task 1


// //?Get first 3 character from Basra with loop




// const reed = "Basra"
// const first = reed.substring(0, 3)

// console.log(first);

//output: Bas


//! task 2


//? Get values of the object by a array's values and print them

// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2021,
//     color: "Silver",
//     mileage: 5000
// };
// car.make,
//     car.model,
//     car.year,
//     car.color,
//     car.mileage;

// console.log(car);

//*Output:
//{
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2021,
//   color: 'Silver',
//   mileage: 5000
// }

//!===================================================



// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2021,
//     color: "Silver",
//     mileage: 5000
// };

// let array = ['make', 'model', 'year', 'color', 'mileage'];

// let result = [];

// for (let i = 0; i < array.length; i++) {
//     let property = array[i];
//     let value = car[property];
//     result.push(value);
// }

// console.log(result);

//Output :[ 'Toyota', 'Camry', 2021, 'Silver', 5000 ]



// //! task 3


// let arr = ["apelsin", "banana", "orange"]
// let lengthArray = arr.length
// for (let i = 0; i < lengthArray; i++) {
//     if (arr[i] === "banana") {
//         arr[i] = "apple"
//     }
// }
// console.log(arr);
// //Output : [ 'apelsin', 'apple', 'orange' ]



//!=============================================================

// ! task 4



//*bu misolda faqat kesmoxchi bo'lgan malumotimiz chiqvotti lekin man xolirdim,
//*malum bir texsdan oxirini olib tashlab oldidegi texstni chiqarish ili qoldirish. 
//*betta biz faqat kesib olingan texstni print qivommiz.



// const w = "dilraboxujamuratova@gmmail.com"

// const slice = w.slice(-4)
// console.log(slice);

// output: .com

//!==============================================================

//! task 5


// let arr1 = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr1[i]);
// }


//!=================================================================

//! task 6


// let arr2 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }

// console.log(sum);

//!===================================================





//! task 7 

//? masivdagi maxsimal indexni toping!


// let arr = [3,8,2,5,1];
// let max = arr[0];


// for(let i = 0; i < arr.length;i++ ){
//     if ( arr[i]> max){
//         max = arr[i];
//     }

// }

// console.log(max);

//========================================

// let arr = [3, 8, 2, 5, 1];
// let max = Math.max(...arr);

// console.log(max);


//!=====================================



// //! task 8 

// //?Massivda muayyan element mavjudligini tekshiring:  masalan 3

// let arr = [1,2,3,4,5]

// let result = arr.includes(3);

// console.log(result);// Output: true.


//!===========================================



//! task 9 


//?Massivdagi ma'lum bir elementning paydo bo'lishini hisoblang:



// let arr = [1, 2, 3, 4, 3, 5, 3];
// let result = arr.filter

// console.log(result);