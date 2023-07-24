// //! task 1

// let res = 50 - 5

// const todayWether = { cloady: false, winter: { day1: true, day2: false } }


// if (res > 40) {
//     todayWether.cloady = true
//     todayWether.winter.day2 = true
//     todayWether.winter.day1 = false

// } else todayWether.cloady = true


// console.log(todayWether);



// //! task 2



// let log = console.log
// let user = {
//     name: "Muhammad"

// }

// let hiscar = {
//     model : "spark"
// }


// log({...user, ...hiscar})



// let a = {
//     name: "Saidumarxon",
//     age: 15
// }
//  a.name = "Odina";
//  a.age = 20;
//  console.log(a);



// let a = {
//     name: "Saidumarxon",
//     age: 15,
//     location: {
//         citiy: "Andijon",
//         region: "Asaka"
//     }
// }
// a.name = "Odina";
// a.age = 20;
// a.location.region = "Toshkent";
// a.location.citiy = "Ozbekistont"

// console.log(a);



// let namm= ["Saidumarxon","Abdulaziz","Alisher"]

// namm.push("Mane")
// namm.unshift("Abduraxmon")

// console.log(namm);



//[["Abduraxmon",Saidumarxon","Abdulaziz","Alisher","Mane"]]



// let a = ["Abduraxmon","Saidumarxon","Abdulaziz","Alisher","Mane"]



// a.pop("Mane")
// a.shift("Abduraxmon")

// console.log(a);

//["Saidumarxon","Abdulaziz","Alisher"]




// let names = ["Abduraxmon","Saidumarxon","Abdulaziz","Alisher","Mane"]
// let b = names.join(" va ")
// //let c = names.toString(b)


// console.log(b);
// console.log(b.split(" "));



// let a = ["Abduraxmon", "Saidumarxon", "Abdulaziz", "Alisher", "Mane"]


// console.log(a.indexOf("Abdulaziz"));//2
// console.log(a[1]); //Saidumarxon



//!indexOf arrayning ichidagi valyueni nechinchi indexda turganini aniqlab beradi.





// let person = {
//     surname: "Sunnatov",
//     firstname: "Bobur",
//     age: 23,
//     married: true,
//     from: "Tashkent",
//     hobbies: {
//         general: "coding",
//         freetime: "swimming"
//     }
// }
// person.surname = "Xujamuratova";
// person.firstname = "Dilrabo";
// person.age = 25;
// person.married = false;
// person.from = "Toshkent";
// person.hobbies.general= "coding";
// person.hobbies.freetime = "lerning"

// console.log(person);

// const myWeekendRoutine = {
//     wake_up: "4 AM",
//     go_to_shopping: "8 AM",
//     shopping_hour: 1,
//     shopping_list: ["potatoes", "banana", "Milk", "Cola", "shoes"],
// }
// myWeekendRoutine.shopping_list.push("tomato")
// myWeekendRoutine.shopping_list.unshift("rise")

// let b = myWeekendRoutine.shopping_list.length;

// if (b > 6) {
//     myWeekendRoutine.shopping_hour = 2
// }

// if (myWeekendRoutine.shopping_hour > 1) {
//     myWeekendRoutine.shopping_list.pop();


// }

// console.log(myWeekendRoutine);
// console.log(myWeekendRoutine.shopping_list.length);




// function a(num) {
//     return num * 60
// }
// a(10)


// function addi(num) {
//     return num + 1;
// }
// console.log(addi(2));

// function triArea(base, heigh) {
//     return (base * heigh) / 2;
// }
// console.log(triArea(3, 2));