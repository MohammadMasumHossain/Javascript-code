// let sum=0;

// for( let i=1;i<=5;i++){
//    sum=sum+i;
// }

// console.log(sum);
// console.log("loop is ended");


// for of loop

// let str="javascript";

// let size=0;

// for(let val of str){
//     console.log("val =", val);
//     size++;
// }
// console.log(size);



// for in loop 

// let student = {
//     name:"masum",
//     age:26,
//     isPass: true,

// };

// for (let key in student){
//     console.log("key =", key , "value=" , student[key])
// }


// print all even number from 1 to 100



// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
  
// }


let guessNumber=24;

let userName=prompt("enter a number ");

while(guessNumber != userName)
{
    userName=prompt("you enter wrong number ,enter another number ");
}

console.log("congratulation , you enter correct numer");


