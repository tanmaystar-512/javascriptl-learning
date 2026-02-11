"use strict"; //treat all js code as new version 
 //lert("hello world");//we are using node js not browser
 //so alert will not work here
 // primitive data types
 //1.number=>2 to power 53
 //2.bigint
 //3.string=>""
 //4.boolean true/false
 //5.null=>standalone 
 //6.undefined=>
//     let age=20;//number
//  let accountbalance=5000n;//bigint
//  let name="tanmay";//string
//  let isLoggedIn=true;//boolean
//  let state=null;//null
//  let city=//undefined
 //object non primitive data types we use opreator typeof to check type of data it is 
//  console.log(typeof age);
// console.log(typeof accountbalance);
// console.log(typeof name);
// console.log(typeof isLoggedIn);
// console.log(typeof state);//object 
// console.log(typeof city);//undefined
// let id = Symbol("unique");
// console.log(typeof id); //symbol
//object 
// let user = {
//   name: "Tanmay",
//   age: 20
// };
//for printing valuse inside object 
//1.we use dot notation for individual values 
// console.log(user.name);//Tanmay
// console.log(user.age);//20;
// //2.we use user ya name as it is to print whoe object 
// console.log(user);//{ name: 'Tanmay', age: 20 }
// console.log(typeof user);//object
// //3.bracket notation
// console.log(user["name"],user["age"]);//Tanmay 20
// //4 we can also use template literals to print object values
// console.log("name is ${user.name} and age is ${user.age}");//name is Tanmay and age is 20
// //5 we can also use JSON.stringify to print object
// console.log(JSON.stringify(user));//{"name":"Tanmay","age":20}
// console.log(typeof user);
let fruits = ["apple", "banana", "grapes"];
console.log(typeof fruits);
const myfunction=function(){
  console.log("this is my function");
}
console.log(typeof myfunction);//function
console.log(myfunction);
