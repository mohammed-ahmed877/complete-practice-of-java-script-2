// let todo = document.querySelector("#taskInput");
// let btn = document.querySelector("#btn");

// let list = document.querySelector("#list");

// let tasks = [];

// function addTask() {
//   if (todo.value == "") {
//     alert("please fill the field");
//   } else {
//     tasks.push(todo.value);
//     console.log(tasks);
//   }
//   todo.value = "";

//   showTask();
// }

// function showTask() {
//   list.innerHTML = "";
//   for (let i = 0; i < tasks.length; i++) {
//     list.innerHTML += `<li>${tasks[i]}
//     <button onClick= "deleteTodo(${i})" >Delete</button>
//     <button onClick= "editTodo(${i})">Edit</button>
    
//     </li>`;
//   }
// }

// function deleteTodo(index){


//     tasks.splice(index , 1)
//     console.log('deleted')

//     showTask()
// }

// function editTodo(index){
//     let newTask = prompt('Enter a task')
//     tasks[index] = newTask
//     console.log(tasks)
//     showTask()
// }







// let todo2 = document.querySelector("#taskInput2")
// let btn2 =document.querrySelector("#html3")
// let list2 = document.querrySelector("#html4")


// let task2 =[]






function tossCoin() {
  let random = Math.random(); 

  let resultText;
  let imageSrc;

  if (random < 0.5) {
    resultText = "Congratulations! You got Heads";
   document.querySelector("#carImage").src = "heads.png"; 
  } else {
    resultText = "Better luck next time! You got Tails";
    document.querySelector("#babe").src = "tails.png"; 
  }

  document.querySelector("#result").textContent = resultText;
  
}























