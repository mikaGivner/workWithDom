////question 1:
//console.log(this);
////will write the global object (the one that wrap the page) which empty right know

//q2:
// const myObj = {
//   name: "Timmy",
//   //   greet: () => {  /*arrow function*/
//   greet: function () {
//     /*decleration function*/
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();
//will write hello undefined because arrow function point on global.
//if the function will not be  arrow function but declearation function it will be fixed

// //q3
// const myFuncDec = function () {
//   console.log(this);
// };
// //because its declaration function, *this* will give the function, and the function is empty right now

// //q4
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

// //will give empty obj because arrow function point to global and global is empty right now (like q1)

//q5
//document.querySelector(".element").addEventListener(() => {
let element = document
  .querySelector(".element")
  .addEventListener("keyup", function () {
    console.log(this);
  });
//this will point to global. in the global there is element but there is no varabile that hold it. we neet to create html element. than add event. than make the function declaretion
