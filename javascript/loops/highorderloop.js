// //for of loops  -> used for iterating over iterable objects like arrays, strings, maps, sets, etc. It provides a simpler syntax compared to traditional loops and is often more readable.
// //syntax: for (const element of array) { ... }
// //["" ,"",""] ,[{},{},{}]
// //for of loop for arrays
// arr=[1,2,3,4,5]
// for(const num of arr){
//     //console.log(num);
// }
// //for of loop for strings
// let name ="hello tanmay";
// for(const nam of name){
//     //console.log(nam);//it will print each character of the string on a new line

// }
// const  map=new Map();
// map.set("name","tanmay");
// map.set("age",20);
// map.set("city","pune");
// for(const [key] of map){
//     //console.log(key);
// }
// const conuntry=new Map();
//     conuntry.set("USA","United state of america");
//     conuntry.set("Iran","Islamic republic of Iran");
//     conuntry.set("India","Republic of India");
// for (const [key,value] of conuntry){
//console.log(`${(conuntry.get("USA"))} fight with ${(conuntry.get("Iran"))}`);
//}//conuntry.set() is used  for adding key-value pairs to the map, and conuntry.get() is used for retrieving the value associated with a specific key. In this case, it retrieves the values for "USA" and "Iran" and constructs a string that indicates a conflict between the two countries.
//for in loop >> used for iterating over the properties of an object. It allows you to access the keys of an object and perform operations on them.
//Syntax: for (const key in object) { ... }
//for in loop for objects
// const cars={
//     car1:"The king",
//     car2:"The runner up",
//     car3:"Mc Queen"
// }
// for (const diigo in cars) {
    
//     console.log(`${diigo} is ${cars[diigo]}`);//in this case, diigo represents the key of the cars object, and cars[diigo] retrieves the corresponding value. The output will be:
    
// }

const cars={
    car1:"The king",
    car2:"The runner up",
    car3:"Mc Queen"
}
for (const [key,value] in cars) {
    
    console.log(key,":",value);
}//This code will throw an error because the for...in loop does not support destructuring assignment. The correct way to iterate over the properties of an object using a for...in loop is as follows:

//for in loops  for maps 
// in maps we can use for of loop to iterate over the key-value pairs, but for in loop is not suitable for iterating over maps. If you want to iterate over a map, you can use the for...of loop with the map's entries() method. Here's an example:

//for in loops for array 
// const coding=["html","js","css","react"];
// for (const languages  in coding) {
// console.log(languages,coding[languages]);
// }

//for each loop >> used for iterating over arrays and performing a specified action for each element in the array. It provides a more concise and readable syntax compared to traditional loops.
//Syntax: array.forEach(function(element) { ... });
//for each loop for arrays

const coding=["html","js","css","react"];
coding.forEach(function(language){
    console.log(language);
})
//In this example, the forEach method is called on the coding array, and a callback function is provided as an argument. The callback function takes each element of the array (in this case, each programming language) and logs it to the console. The output will be:    

//using arrow function with for each loop
// coding.forEach((item) => {
//     console.log(item);
// })
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })
const mycodinng=[
    {language:"html",level:"beginner"},
    {language:"js",level:"intermediate"},
    {language:"css",level:"beginner"},
]
mycodinng.forEach((item)=>{
    console.log(`the language is ${item.language} and the level is ${item.level}`);
})