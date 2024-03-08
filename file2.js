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

let array1=["item1", "item2"];
let array2=array1;

console.log("array1:", array1);
console.log("array2", array2);
array1.push("item3");

console.log("after add new element into array");

console.log("array1:", array1);
console.log("array2", array2);












