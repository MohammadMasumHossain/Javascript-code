// let firstName = "      MasumHossainrana       ";

// // it will show the firstname variable length

// //it will show the last index of the string;
// // firstName = firstName.toLowerCase();
// // console.log(firstName);
// firstName = firstName.trim();
// console.log(firstName.length);
// console.log(typeof firstName);
// let age=26;
// console.log(typeof age);
// age= age+" "; //convert number into string
// console.log(typeof age); 
// let year="25";
// console.log(typeof year);
// year=+"25";// convert string into number
// console.log(typeof year);

// let age = 26;
// age = String(age);// convert number into string
// console.log(typeof age);

// let year = "25";
// year = Number(year); //convert string into number
// console.log(typeof year);
//string concatenation
// let firstname="Masum";
// let lastname= "rana";
// let fullname= firstname+" "+ lastname;
// console.log(fullname);

// let number1="10";
// let number2="20";
// let total= Number(number1)+Number(number2); //convert string into number
// console.log(total);



//template string
// let age=26;
// let name="Masum"
// let aboutMe=`MY NAME IS ${name} and my age is ${age}`; // here we have to use backtick symbol

// console.log(aboutMe);
// console.log(typeof aboutMe); // its print string



// undefined

// let name;
// console.log(typeof name); // it will print undefined.
//when we declare variable but don't assign any value it print undefined.both var and let .

// let name;
// console.log(typeof name);
// name="masum";
// console.log(typeof name, name);// we can print more than one thing in console like this . using coma



//null

// let myvariable=null;
// console.log(myvariable); // it will print null
// myvariable="masum"; // we can also change the null variable 
// console.log(myvariable, typeof(myvariable));
// console.log(typeof null); // it will print object evenif its null variable. its a bug in javascript
// bug, error of javascript.



//BigInt

// let number1=BigInt(23); // using BigInt we can convert a number into BigInt Datatype
// let number2=25n; // we can also use "n " to convert BigInt 
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(number1);
// console.log(number1+number2); 
// we cannot perform arthimetic operation without both variable into BigInt data type. if one is number and another is BigInt than it will show error



//booleans and comparison operator
//booleans
//true,false

// let num1 = "7";
// let num2 = 7;
// console.log(num1 >= num2);// print false
// console.log(num1 <= num2);// print true;
// // ==  vs ===
// console.log(num1 == num2); // print true
// console.log(num1 === num2); // print false
// // "==" check only number on the otherhand "===" check number and datatype both
// console.log(num1!=num2) 
// "!=" check only number on the otherhand "!==" check number and datatype both



//truthy and falsy values

// false values 
// false
// ""
// null 
// undefined
// 0

// let firstName= 0;
// if(firstName){
//     console.log("hlw");
// }
// else{
//     console.log("my name is masum");
// }

//ternary operator

// let age = 4;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

//nested if else

// let winningNumber = 15;
// let guessNumber = Number(prompt("enter a number"));
// if (winningNumber === guessNumber) {
//     console.log("you are right");
// }
// else {
//     if (winningNumber > guessNumber) {
//         console.log("you are low");
//     }
//     else {
//         console.log("you are little high");
//     }
// }



//switch statement

// let day = 2;
// switch (day) {
//     case 1:
//         console.log("saturday");
//         break;

//     case 2:
//         console.log("sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("tuesday");
//         break;
//     case 5:
//         console.log("wednesday");
//         break;
//     case 6:
//         console.log("thursday");
//         break;
//     case 7:
//         console.log("friday");
//         break;
//         defalut:
//         console.log("invalid day");
//         break;
// }


//break and continue
// for(let i=0;i<9;i++){
//     if(i===3)
//     {
//         break;
//     }
//     console.log(i);
// }
// console.log("hlw");
//print 0 1 2 hlw

// for (let i = 0; i < 9; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }
// console.log("hlw");








