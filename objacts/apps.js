// const obj={
//  fullName:"ahmed",
// email:'ahmed',
// hobbies:['swiming', 'driving','']
// }
// console.log(obj.hobbies[0])
// console.log(obj.fullName)








const students = [
  {
    name: "Ali",
    age: 20,
    city: "Karachi"
  },
  {
    name: "Ahmed",
    age: 22,
    city: "Lahore"
  },
  {
    name: "Sara",
    age: 19,
    city: "Islamabad"
  }
];
console.log(students)


for (let i = 0; i < students.length; i++) {
    container.innerHTML += `
   <div>
   ${students[i].name},
    ${students[i].age}, 
    ${students[i].city},
    </div>;`
}
