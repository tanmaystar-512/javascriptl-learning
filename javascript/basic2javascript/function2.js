//more about function
//1.restopreator(...)
// function calculaateprice(...num){
//     return num
// }
// console.log(calculaateprice(100,200,300,400,500));//using restopreator we can pass any number of arguments to the function and it will return an array of those arguments. In this case, it will return [100, 200, 300, 400, 500].
//another case
// function calculateprice(val1,val2,...num){
//     return num;
// }
// console.log(calculateprice(100,200,300,400,500));//In this case, the first two arguments (100 and 200) will be assigned to val1 and val2 respectively, and the rest of the arguments (300, 400, 500) will be collected into an array and assigned to num. Therefore, it will return [300, 400, 500].
//another case
//function calculteprice(val1,val2,...num){
  // var c=num;
  // console.log(c);//In this case, the first two arguments (100 and 200) will be assigned to val1 and val2 respectively, and the rest of the arguments (300, 400, 500) will be collected into an array and assigned to num. The function will print the array [300, 400, 500] to the console, but since there is no return statement, it will return undefined by default.
  //console.log(num);//In this case, the first two arguments (100 and 200) will be assigned to val1 and val2 respectively, and the rest of the arguments (300, 400, 500) will be collected into an array and assigned to num. The function will print the array [300, 400, 500] to the console, but since there is no return statement, it will return undefined by default.
  //console.log(val1,val2);//In this case, the first two arguments (100 and 200) will be assigned to val1 and val2 respectively, and the rest of the arguments (300, 400, 500) will be collected into an array and assigned to num. The function will print 100 and 200 to the console, but since there is no return statement, it will return undefined by default.
//}
//console.log(calculteprice(100,200,300,400,500));//In this case, the function does not return anything, so it will return undefined. The rest operator will still collect the remaining arguments into an array assigned to num, but since there is no return statement, the function will return undefined by default.



// ///2.passing object to function
// //method1
// // const user={
// //     name:"tanmay",
// //     price:1000
// // };
// function handleObject(obj){
//     console.log(obj.name);
//     console.log(obj.price);
//     console.log(`the name of the user is ${obj.name} and the price is ${obj.price}`);
// }
// //handleObject(user);
// //method2
// handleObject({name:"tavish",price:1000});//In this case, we are directly passing an object literal to the function handleObject. The function will access the properties of the object and print the name and price to the console, as well as a formatted string that includes both values.,   


//3 passing aarys to function
//method1
//const myarr=[1,2,3,4,5];
function handlearray(arr){
    return arr;
    //console.log(arr);
}
//handlearray(myarr);
//console.log(handlearray);//[Function: handlearray] This will print the function definition itself, not the result of executing the function.
//console.log(handlearray(myarr));//[1, 2, 3, 4, 5] This will execute the handlearray function with the argument myarr, which will return the array [1, 2, 3, 4, 5] and print it to the console.
//method2 
console.log(handlearray([1,2,3,4,5]));//[1, 2, 3, 4, 5] This will execute the handlearray function with an array literal as the argument. The function will return the array [1, 2, 3, 4, 5] and print it to the console.