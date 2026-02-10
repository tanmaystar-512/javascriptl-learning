// Q1

// What will be the output?

// let score = 100;
// let scoreCopy = score;

// scoreCopy = 200;

// console.log(score);// my answer is 200 but correct answer is 100 because 
// let score = 100;
// let scoreCopy = 200;

// score=scoreCopy;

// console.log(score);//  now answer is 200 
//ques 2
// let value = 9007199254740991;
// console.log(value + 1 === value + 2);// my answer is false but correct answer is true because 
// JS use 64 bit to store number so after certain point it cant diffrentiate between two numbers        
// let value = 9007199254740991n;
// console.log(value + 1n === value + 2n);// now answer is false because big int can store large values 
//ques 3
// let big = 100n;
// let num = 10;

// console.log(big + num);//becaues we cant add towo diffrent data types together it will give error
//ques 4
// console.log(typeof "false");
// console.log(typeof false);// string ,boolean
// //ques 5
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
//ques 6
// let name = "Tanmay";

// console.log(`Hello ${name}`);
// console.log("Hello ${name}");// sting ake because we "" hello ${name} not Hello Tanmay
// //ques 7
//  let a = 10;
//  let b = 5;

// console.log(`sum is ${a + b}`);
// console.log(`comparison is ${a > b}`);//15 ,true
//ques 8
// console.log(`value is ${10 + "20"}`);// my answer is 30 but correct answer is 1020 because when we add number and string it convert number to string and concatenate them
// console.log(`value is ${10 - "5"}`);// now answer is 5 because - operator cant work on string so it convert string to number and then do subtraction
//ques 9
// let value = null;

// console.log(`value is ${value}`);
// console.log(typeof `${value}`);
// answer is value is null , string because when we use template literals it convert everything to string






