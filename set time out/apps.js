// setTimeout(function()  {
//     console.log("runing time");
    
// }, 2000);



// setInterval(() => {
//     console.log("i am running");
    
// }, 2000);



// // function add(num1,num2) {
// //     return num1+num2
// // }
// // console.log(add (13,12));


// const add =(num1,num2) =>num1+num2;
// console.log(add(15, 20));
 









let time= document.querySelector(".time");

let second = 0;
let mintue = 0 ;
let houre = 0;

let interval;


function start(){
    if (interval) return; 
interval = setInterval(() => {
    second++;
 if (second == 60){
    second = 0;
   mintue ++;
}

if (mintue == 60){
    mintue=0;
    houre ++;
}
time.innerHTML = `${houre}: ${mintue} : ${second}`;   
},1000);
}


function stop() {
   clearInterval(interval);

     interval = null;
}


function reset() {
    clearInterval(interval);
    second = 0;
    mintue = 0;
    houre = 0;
    time.innerHTML = `00:00:00`;

}