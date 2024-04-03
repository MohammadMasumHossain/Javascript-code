// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello")

// }, 2000); // timeout 2s equal 2000 ms

// console.log("three");
// console.log("four");



// function getdata(dataID) {
//     setTimeout(() => {
//         console.log("data :", dataID);
//     },4000)

// }



// get data1 data2 data3 every 2s interval
// function getdata(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data:", dataID)
//         getNextData();

//     }, 2000);
// }

// //calback hell
// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {

//         });
//     });
// });




let promise = new Promise((resolve,reject) =>{
    console.log("i am a promise");

})
