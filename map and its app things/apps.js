
// const users = [
//     { id: 1, name: "Ali", age: 21, city: "Quetta" },
//     { id: 2, name: "Sara", age: 19, city: "Karachi" },
//     { id: 3, name: "Ahmed", age: 25, city: "Lahore" },
//     { id: 4, name: "Ayesha", age: 22, city: "Islamabad" },
//     { id: 5, name: "Usman", age: 24, city: "Peshawar" },
//     { id: 6, name: "Zainab", age: 20, city: "Multan" },
//     { id: 7, name: "Hassan", age: 23, city: "Faisalabad" },
//     { id: 8, name: "Fatima", age: 18, city: "Quetta" },
//     { id: 9, name: "Bilal", age: 26, city: "Hyderabad" },
//     { id: 10, name: "Noor", age: 21, city: "Sukkur" },
// ];



// call back and higher orderfunction
// foreach, map, filter , reduce , find , findindex

// users.forEach() // "method" jider dot a jaya os ko hum method khata ha 
// alert() // "function" jider dot use na ho os ko hum function khata ha 

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);

// }

// users.forEach(function (item , index , arr) {
//     console.log(item , index , arr)
// });

// users.forEach(()=>{})

// users.forEach((item , index)=>{
//     console.log(item , index);

// })

// callback function wo function hota ha jo kisi dosra function ka argument ma ata ha.

// highrt order function wo function hota ha jiska argument ma callback ata ha.

// const ol = document.querySelector("ol");
// const iteration = users.forEach(item => {
//     ol.innerHTML += `<li>${item.city}</li>`

//     return 'hello'
// })
// console.log(iteration);

// foreach ka function kuch bhi return nahi krta.

// const iteration = users.map(item => {
//     ol.innerHTML += `<li>${item.city}</li>`
//     return item.name
// })

// console.log(iteration);

// foreach or map ka farq sirf itna ha k foreach kuch return nahi krta or map return krta.

// map hum use krta hain array ko modify krna ka liya or iteration chalana ka liya bhi.

// console.log(users.map(item => item.name + " updated"));

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredArr = num.filter(item => {
//     return item > 5
// })

// console.log(filteredArr);

// const filterUsers = users.filter(item => item.age > 22)
// console.log(filterUsers);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // accumulator
// // currentValue
// const sum = num.reduce((acc , cval)=>{
//     return acc + cval
// } , 0)

// // 0 + 1
// // 1 + 2
// // 3 + 3
// // 6 + 4

// console.log(sum);

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]

// }

// console.log(sum);

// promises async await
// api calling










// users.forEach(function(item , index){
//     console.log(item , index)
// });


// // Q1
// // Print each number using forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (arr) {
    console.log(arr);
});
// // Q2
// // Print: I like apple, I like banana...
const fruits = ["apple", "banana", "mango"];
fruits.forEach(function(item){
    console.log("i like "+ item)
})
// // Q3
// // Multiply each value by 2 and print
const nums = [10, 20, 30];
nums.forEach(function(items){
    console.log(items *2)
})








// const iteration = users.map(item => {
//     ol.innerHTML += `<li>${item.city}</li>`
//     return item.name
// })

// 🔹 map Questions
// // Q1
// // Return a new array with squares
const arr = [1, 2, 3, 4];
const squares = arr.map(item => item * item);





// // Q2
// const nums = [5, 10, 15];
// // Add 5 to each number











// // Q3
// const names = ["ali", "ahmed", "usman"];
// // Convert all names to uppercase










// // Q4
// const users = [{name:"Ali"}, {name:"Ahmed"}];
// // Return array of names only








// 🔹 filter Questions
// // Q1
// const arr = [1, 2, 3, 4, 5, 6];
// // Get even numbers






// // Q2
// const nums = [10, 25, 30, 45];
// // Get numbers greater than 20








// // Q3
// const words = ["cat", "lion", "dog", "elephant"];
// // Get words with length 3









// // Q4
// const people = [{age:18}, {age:25}, {age:15}];
// // Get people with age > 18




// 🔹 reduce Questions
// // Q1
// const arr = [1, 2, 3, 4];
// // Find sum




// // Q2
// const nums = [5, 10, 15];
// // Find multiplication of all numbers














// // Q3
// const arr2 = [10, 20, 30, 40];
// // Find maximum value












// // Q4
// const letters = ["a", "b", "a", "c", "b"];
// // Count occurrences of each letter
















