// //nested function and hosting
// function outer(){
//     const name="tanmay";
//     function inner(){
//         const name1="tavish";
//         console.log(name);//This will print "tanmay" to the console. The inner function has access to the variables of its outer function due to JavaScript's lexical scoping.
//     console.log(name1);//This will print "tavish" to the console. The inner function can access its own variables as well as the variables of the outer function.
//     }
//     inner();
//     //console.log(name1);//This will throw a ReferenceError because name1 is defined within the inner function and is not accessible outside of it. The outer function does not have access to the variables of the inner function.
// }
// outer();
// //if nested
// if(true){
//     const name="tanmay";
//     if(name==="tanmay"){
//         const website="tanmay.com";
//         console.log(name+website);
//  }
//  console.log(name); //This will print "tanmay" to the console. The variable name is defined in the outer block and is accessible within the inner block due to JavaScript's block scoping with let and const.
// console.log(website);//This will throw a ReferenceError because the variable website is defined within the inner block and is not accessible outside of it. The outer block does not have access to the variables of the inner block.
// }
//hosting concerns the behavior of variable and function declarations in JavaScript. In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example
addone(5)
function addone(num){
    return num+1;
}
addtwo(5);//This will throw a ReferenceError because addtwo is defined as a function expression, and only the variable declaration (var addtwo) is hoisted, not the assignment of the function to the variable. Therefore, at the time of the call to addtwo(5), addtwo is undefined, resulting in an error. To avoid this issue, you can define addtwo as a function declaration instead of a function expression.
const addtwo=function(num){
    return num+2;
}
//addtwo(5) this will work because the function expression is assigned to the variable addtwo before it is called. However, if you try to call addtwo(5) before the assignment, it will throw a ReferenceError because addtwo is not defined at that point in the code.