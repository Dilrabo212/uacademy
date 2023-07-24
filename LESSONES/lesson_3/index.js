
//! qaytarilgan sonlarni nechi martta qaytarilganini toping!


// const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9]

// const result = {}
// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] in result) {
//         result[numbers[i]] = result[numbers[i]] + 1
//     } else {
//         result[numbers[i]] = 1
//     }

// }

// console.log(result);

//! qaytarilgan sonlarni massivdan olib tashlash!

// const num = [1, 2, 3, 4, 3, 5, 3, 3, 3, 3, 3, 3, 3];

// const result = {}

// for (let i = 0; i < num.length; i++) {

//     if (!(num[i] in result)) {

//         result[num[i]] = 1
//     }

// }

// console.log(result);
// //*massivni elementlarini obyekt 
// //*o'ziga  key sifatida olib ilani velyularini nechtaligini xisoblab chiqadi.
// //*Output: { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }




// Object.keys(result);


// let keys = Object.keys(result);

// console.log(keys);
// //* bo'tta obyekt elementlarini massiv sifatida ifodalanvotti!
// //*Output [ '1', '2', '3', '4', '5' ]



// function removeDublicates(arr){
//     return [...new Set(arr)];
// }
//     const number =[1, 2, 3, 4, 5, 6, 7, 2, 4, 5];
//     const uniqueNumbers = removeDublicates(number);



//     console.log(uniqueNumbers);

// 





// // const mySet = new Set([1, 2, 3, 4, 5, 6, 7])

//!===================
//? Dilafruzxon yechimi.




// function UniqueKey(arr) {
//     let myset = new Set(arr);
//     return [...myset];
//   }
//   console.log(UniqueKey([2, 4, 4, 5, 5, 1]));



//!=================================


function MargeArrays(arr1, arr2) {

    const set1 = new Set[arr1]
    const set2 = new Set[arr2]

    const isNotDublicate = [...set1].every((el) => !set2.has(el))

    if (isNotDublicate) {
        return [...set1, ...set2].sort((a, b) => a - b)

    } else {
        return 'Not mergable';
    }


}
console.log(MargeArrays([1, 1, 1, 2, 3, 4], [5, 6, 6, 6, 7, 9, 8, 10]))




