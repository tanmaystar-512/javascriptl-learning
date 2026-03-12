//function 
//function syntax
//function functionName(parameters) {
    // code to be executed }
    // function printName(){
    //     console.log("t");  
    //     console.log("a");
    //     console.log("n");
    //     console.log("m");
    //     console.log("a");
    //     console.log("y");
    // }
    // printName;//Simply referencing the function name without parentheses will not execute it (e.g., sayMyName).
    // printName();//To run a function, you need to call it using its name followed by parentheses (e.g., sayMyName()).
    // console.log(printName);//This will print the function definition itself, not the result of executing the function.
    // console.log(printName());//This will execute the function and print its return value, which is undefined in this case since the function does not return anything.
// function add(a,b){
//     console.log(a+b);
// }
//console.log(add(3,4));//This will execute the add function with arguments 3 and 4, which will print 7 to the console. However, since the add function does not return a value, console.log(add(3,4)) will print undefined after printing 7.
// function add(a,b){
// a+b;
// }
// console.log(add(3,4));//This will execute the add function with arguments 3 and 4, but since the function does not return a value, console.log(add(3,4)) will print undefined. The expression a+b is evaluated but its result is not returned or printed.
// function add(a,b){
//     console.log(a+b);

// }
// console.log(add(3,"4"));//This will execute the add function with arguments 3 and "4". In JavaScript, when you use the + operator with a number and a string, it performs string concatenation. Therefore, 3 + "4" will result in the string "34". The add function will print "34" to the console, and since it does not return a value, console.log(add(3,"4")) will print undefined after printing "34".
// function add(){
//     console.log(a+b);
// }
// console.log(add(3,4));//This will execute the add function with arguments 3 and 4, but since the function does not have parameters defined to receive these arguments, it will result in a ReferenceError because a and b are not defined within the function's scope. Therefore, console.log(add(3,4)) will throw an error instead of printing a result.
// function add(a,b){
//     console.log(a+b);

// }
// console.log(add(3,undefined));
//This will execute the add function with arguments 3 and undefined. In JavaScript, when you use the + operator with a number and undefined, it results in NaN (Not-a-Number). Therefore, the add function will print NaN to the console, and since it does not return a value, console.log(add(3,undefined)) will print undefined after printing NaN.
//*****important for function to return a value if we want to use the result of the function outside of it. If a function does not have a return statement, it will return undefined by default. In the case of the add function, if we want to get the sum of a and b and use it outside the function, we should include a return statement like this:****
// function add(a,b){
//     return a+b;

// }
// console.log(add(3,4));
// function addd(a,b){ 
//     a+b;

// }
// console.log(addd(3,4));
// function addd(a,b){
//     result=a+b; 
//     return result;
// }
// console.log(addd(3,4));
//
//
function loginUser(username="JHon"){
    return `${username} logged in`;
}
console.log(loginUser());