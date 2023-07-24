



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



// *bu misolda faqat kesmoxchi bo'lgan malumotimiz chiqvotti lekin man xolirdim,
// *malum bir texsdan oxirini olib tashlab oldidegi texstni chiqarish ili qoldirish. 
// *betta biz faqat kesib olingan texstni print qivommiz.



// const text = "dilraboxujamuratova@gmail.com";

// let index = text.lastIndexOf(".");
// result = text.substring(0, index);


// console.log(index);
// console.log(result);

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
// let target = 3;
// let count = 0;

// for (i = 0; i < arr.langth; i++) {
//     if (arr[i] === target) {
//         count++;
//     }
// }

// console.log("count = ", count);



//=========================================

// // tushunmadim lekin bundanam soddaro yo'lini topish kere!!!!

// let arr = [1, 2, 3, 4, 3, 5, 3, 3, 3, 3, 3, 3, 3];
// let target = 3;
// let count = arr.reduce(function (total, current) {
//     if (current === target) {
//         return total + 1;
//     }
//     return total;
// }, 0);

// console.log(count);

//!o'zim uchun qaytarish

//**======================================================= */
// const user = {
//     name: "dilrabo",
//     born: "Tashkent",
//     hesCar: false
// }

// for(let key in user){
// console.log(key);
// }

// for( let key in user){
//     console.log(user[key]);
// }
// result = user.name;
// user.born;
// user.hesCar;
//console.log({ ...user });

//Output :{ name: 'dilrabo', born: 'Tashkent', hesCar: false }


//! task 10

// let arr = [1, 2, 3, 4, 5];
// let summ = arr.reduce(function (total, current) {
//     return total + current;
// }, 0);

// let summa = summ / arr.length;

// console.log(summ);
// console.log(summa);


// //! tushunmadim !

//===============================================
// //! task 11


// let arr = ['apple', 'banan', 'orange'];
// let fruit= arr.reverse();

// console.log(fruit);

// //! tushundim
// //==================================================

// //! task 12


// let arr1 = ['apple', 'banan', 'orange'];
// let fruit1= arr.reverse();

// console.log(fruit1);


//* 11 - 12 - task bir xil ekan!


//!   task 13

//?Ob'ektda massivning har bir qiymati kalit sifatida mavjudligini tekshiring,
//? agar ob'ektga qiymat kalit va qiymat sifatida qo'shilmasa

// let obj = { "name": "John", "age": 25, "city": "New York" }

// let array = ['born_place', 'university', 'car'];
// for( let i = 0; i < array.length; i++){
//     let value = array[i];
//     if(!obj.hasOwnProperty(value)){
//         obj[value] = value;
//     }
// }
// console.log(obj);

//* Kod massivdagi har bir qiymatni takrorlaydi va hasOwnProperty usuli yordamida 
//*ob'ektda kalit sifatida mavjudligini tekshiradi. Agar kalit mavjud bo'lmasa, 
//*u ob'ektga kalit-qiymat juftligini qo'shadi.


//======================================================================================

//! task 14



// let obj = { "name": "John", "age": 25, "city": "New York" }

// let array = ['born_place', 'university', 'car'];


// for (let i = 0; i < array.length; i++) {
//     let value = array[i];
//     if (!obj.hasOwnProperty(value)) {
//         obj[value] = value;
//     }
// }
// console.log(obj);



function triangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be positive values.");
    }

    const area = 0.5 * base * height;
    return area;
}

const base = 6;
const height = 4;
const result = triangleArea(base, height);
console.log("The area of the triangle is:", result);
