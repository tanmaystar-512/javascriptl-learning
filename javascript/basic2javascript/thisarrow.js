//THIS KEYWORD AND ARROWFUNCTION
const user = {
    username: "tanmay",
    age: 20,
    welcomemesage: function () {
        //console.log(`welcome to this page, ${username}`)
        console.log(`welcome user name:  ${this.username}`)
        console.log(this);//In this context, this refers to the user object itself. When the welcomemesage function is called as a method of the user object, this will point to the user object, allowing us to access its properties (like username) and methods. Therefore, console.log(this) will print the entire user object to the console.
    }
};
// user.welcomemesage();
// user.username = "tavish";
// user.welcomemesage();
//console.log(this);//In the global context (outside of any function), this refers to the global object. In a browser environment, the global object is typically the window object. Therefore, console.log(this) in the global context will print the window object to the console. However, in strict mode, this will be undefined in the global context.
// function vaidik(){
//        const username="vaidik"
//    console.log(this.username);//In this context, this refers to the global object (window in a browser environment). Since there is no username property defined on the global object, this.username will be undefined. Therefore, console.log(this.username) will print undefined to the console. If you want to access the username variable defined within the vaidik function, you should simply use console.log(username) instead of this.username.
// }

//vaidik();//In this case, when the function vaidik is called in the global context, this will refer to the global object (window in a browser environment). Therefore, console.log(this) will print the global object to the console. However, if you are running this code in strict mode, this will be undefined in the global context.


//Arrow Function Syntax (10:41 - 11:34): Introduced in ES6, arrow functions simplify function declaration. The function keyword is replaced by a fat arrow (=>) after the parameters.
const  student =()=>{
    const name="tanmay";
    console.log(this);//In an arrow function, this is lexically bound, meaning it takes the value of this from the surrounding context where the arrow function is defined. In this case, since the arrow function is defined in the global context, this will refer to the global object (window in a browser environment). Therefore, console.log(this) will print the global object to the console. However, if you are running this code in strict mode, this will be undefined in the global context.
}

student()
// //explicit 
// const  add=(num1,num2)=>{return num1+num2}
// console.log(add(3,4));
// //implicit
// const addtwo=(num1,num2)=>num1+num2
// console.log(addtwo(3,4));


const loginUser1=()=>({user:"tanmay"})
console.log(loginUser1());