// Array
// array is reference type
// how to create Array
// array is a ordered collection of elements

// let numbers=[1,2,3,4];
// let fruits=["mango", "banana","apple"];
// let mixed=[1,2,3, "apple", null, undefined];
// console.log(numbers);
// console.log(fruits);
// console.log(mixed);
// let fruits = ["mango", "banana", "apple"];
// console.log(fruits);
// fruits[2]="dates";
// console.log(fruits);

// let fruits = ["mango", "banana", "apple"];
// let obj={};//object literal
// console.log(typeof fruits); // it will return object evenif its an array.
// // it will print object.
// console.log(typeof obj); // it will return object
// console.log(Array.isArray(fruits)); // it will return true
// console.log(Array.isArray(obj)); // it will return false


// Array push pop
//  Array shift unshift

// let fruits=["mango", "banana", "apple"];
// console.log(fruits);
// //push
// add elemnt in an array into last 
// fruits.push("dates");
// console.log(fruits);

// //pop
// remove element from last 
// fruits.pop();
// let popfruit=fruits.pop();
// console.log(fruits);
// console.log(popfruit);

// unshift
// add element from first of the array

// let fruits=["mango", "dates"];
// console.log(fruits);
// fruits.unshift("jackfruit");
// console.log(fruits);

// shift
// remove element from first of the array
// let fruits=["mango", "dates"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// push and pop are faster compare to shift and unshift



// primitive and reference data types.

// let num1 =6;
// let num2 =num1;
// console.log("num1 value is", num1);
// console.log("num2 value is", num2);

// num1++;
// console.log("num1 value after increament", num1);
// console.log("num2 value after increment" , num2);

//reference types
//  array

// let array1=["item1", "item2"];
// let array2=array1;

// console.log("array1:", array1);
// console.log("array2", array2);
// array1.push("item3");

// console.log("after add new element into array");

// console.log("array1:", array1);
// console.log("array2", array2);



//how to clone array
// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2); // it will print true. 

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// console.log(array1 === array2); // it will print false.


// let array1=["item1", "item2"];
// // let array2=array1.slice(0); here we clone the array1 
// //let array2=[].concat(array1); // here is another way to clone array
// // there is another way to clone array . its called spread operator.
// let array2=[... array1];
// console.log(array1===array2); // it will return false thats means array1 and array2 are separate array


//for loop in array
// let fruits = ["mango", "grapes", "banana", "apple"];
// for (let i = 0; i <fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());

// }

// let fruits = ["mango", "grapes", "banana", "apple"];
// let fruits2=[];
//  for (let i = 0; i <fruits.length; i++) {
//      fruits2.push(fruits[i].toUpperCase());
//  }
//  console.log(fruits2);


// //USE const for creating array
// const fruits=["mango", "banana"];
// fruits.push("apple");
// console.log(fruits);
// its best practice to use const when we use reference datatype.



// for of loop in array

// let marks=[70,80,90];
// for(let x of marks){
//     console.log(x);
// }


// for in loop in array
// let marks=[40,60,70];
// let marks2=[];
// for( let index in marks){
//    marks2.push( marks[index]);
// }
// console.log(marks);



// array destructuring
// const myarray=[20,30];
// let myvar1=myarray[0];
// let myvar2=myarray[1];

// console.log("value of myvar1 is" , myvar1);
// console.log("value of myvar2 is"  , myvar2);

// const myarray=[20,30];
// let [myvar1 , myvar2] = myarray;

// console.log("value of myvar1 is" , myvar1);
// console.log("value of myvar2 is"  , myvar2);



// Object referrence type
//array are good but not sufficient for real world data
//object store  key value pairs
// object donot have index

// how to create object
//  const person={
//     name:"masum",
//      age:"26",
//      hobbies:["sleeping", "listening quran"]
//     };
//  console.log( typeof person); // print object
//  console.log(person);
//  console.log(person.hobbies);

//  // how to access data from objects

//   console.log (person.name);
//   console.log(person["age"]); // we can use dot notation or [] notation to access data from objects

//   // how to add key value pairs to object

//   person.gender="male";
//   console.log(person);



// difference between dot notation and bracket notation

// const person = {
//     name:"masum",
//      age:"26",
//     "person hobbies" :["sleeping", "listening quran"]
//     }


//  console.log(person["person hobbies"]);


// how to iterate object
// const person = {
//     name: "masum",
//     age: 26,
//     "person hobbies": ["sleeping", "listening Quran"]

// }
// for in loop
// object.keys

// we use for in loop and Object.keys to iterate object
// for (let key in person) {
//     //console.log(`${key} : ${person[key]}`);
//     console.log(key, " :" , person[key]);
// }
// console.log(Object.keys(person)); //it will give me an array



// // computed properties
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// // const obj={
// //     objkey1: "myvalue1",
// //     objkey2: "myvalue2",

// // }

// const obj={
//     [key1] : value1,
//     [key2] :value2,
// }
// console.log(obj);



//spread operator

// const array1=[1,2,3];
// const array2=[4,5,6];

// const newarray=[... array1 , ...array2];
// console.log(newarray);


//spread operator in object

// const key1 = {
//     name1: "masum",
//     age1: "25",
// }

// const key2 = {
//     name2: "nahid",
//     age2: "26",
// }

// const key3 = { ...key1, ...key2, key70: "value70" };

// //console.log(key3)
// // console.log(key3)
// const key4 = { ..."abc" };
// console.log(key4);




//object destructuring

// const band={
//     bandname: "artcell",
//     bandsong: "aniket prantor",
// }

// // const bandname =band.bandname;
// // const bandsong= band.bandsong;

// // console.log(bandname);
// // console.log(bandsong);

// const {bandname, bandsong} =band;
// console.log(bandname);
// console.log(bandsong);


// object inside array
// very useful  in real world application

// const user = [
//     {
//         userid: 1,
//         firstname: "masum",
//         gender: "male"
//     },

//     {
//         userid: 2,
//         firstname: "miraz",
//         gender: "male"
//     },

//     {
//         userid:3,
//         firstname:"saima",
//         gender:"female",
//     }
   
// ]

// for( let users of user){
//     console.log(users.userid)
// };































