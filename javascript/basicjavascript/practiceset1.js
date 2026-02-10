// 🟢 TASK 1— Explicit Conversion Only

// Write code that:Stores "50" in a variableConverts it into a numberAdds 25 to itPrints the final resultRestriction:u are not allowed to rely on implicit conversion
//answer 
// let value="50";
// console.log(Number(value)+25);//75
//or 
// let value="50";
// let numbervalue=Number(value);
// let result=numbervalue+25;
// console.log(result);//75
//task 2 print thes and see the results
//  "10" + 5
// 5 + "10"
// "10" + 5 + 2
// 5 + 2 + "10"
// console.log("10"+5);//105
// console.log(5+"10");//510
// console.log("10"+5+2);//107//1052 because execution in js from left to right so steing occurs first that why 1052 instead of 107ok 
// console.log(5+2+"10");//710
// TASK 3 — Force ArithmeticWrite code that:Takes "100" and "20" as stringsConverts both properlySubtracts themPrints the result
// let num1="100";
// let num2="20";
// console.log(Number(num1)-Number(num2));//80
//task 4  check datatype of 
// let num=NaN
// console.log(typeof num);//number,string if "NaN"
//task 4
// Create s variable of type sting and try to add a numter to it
// Use typeof operator to find the datatype of the stung in last question
//answer
// let name="tanmay";
// let result =name+19;
// console.log(result);//tanmay19
// console.log(typeof result);//string
//task5 Create a const object in javasirift Can you changit to hold a number later
// const student={
//     name:"tanmay",
//     age:19
// };
// let namenumber=Number(student);
// console.log(typeof namenumber);//number
// console.log(namenumber);//NaN
// student =10;
// console.log(student);//error cannot reassign const variable// but we can add new key to const object

// important ques
// console.log(Number({}));
// console.log(Number([]));
;// console.log(Number([10]));
//task 6Try to add a newe key to the const object
// in Problem 5. Were you able to do it?
// const student = {
//     name: "tanmay",
//     age: 19
// };
// student.grade="A";
// student.branch="AI&DS";
// console.log(student)//{ name: 'tanmay', age: 19, grade: 'A', branch: 'AI&DS' } yes we can add new 
//task 7 write va Is program to create a word-eaningductionary of 5' 'words.
// const dictionary={
//     apple:"a fruit of red color",
//     table:"use for kepping thing ",
//     numbers:"used for counting like 1---9",
//     tiger:" wild aniaml",
//     plant:"give us oxygen"
// };
// console.log(dictionary);
