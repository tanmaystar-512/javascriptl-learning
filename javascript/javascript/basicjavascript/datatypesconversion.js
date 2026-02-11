//convesrion of data 
//  let marks=0;
// console.log(typeof marks);
// console.log(typeof(marks));
//output is number ,number
//now converting number to string
// let stringmarks=String(marks);
// console.log(typeof stringmarks);//string
// console.log(stringmarks);//33
//now converting number to boolean
// let booleanmarks=Boolean(marks);
// console.log(typeof booleanmarks);//boolean
// console.log(booleanmarks);//true !=0 ,false=0
//now converting string to number 
//case1
// let name="33";
// let stringnumber=Number(name);
// console.log(typeof stringnumber);//number
// console.log(stringnumber);//33
//case 2
// let name="tanmay123";
// let stringnumber=Number(name);
// console.log(typeof stringnumber);//number
// console.log(stringnumber);//nan(nota number)
//case3 
// let name=null;
// let stringnumber=Number(name);
// console.log(typeof stringnumber);//number
// console.log(stringnumber);//0
//case4
// let name=undefined;
// let stringnumber=Number(name);
// console.log(typeof stringnumber);//number
// console.log(stringnumber);//NaN(not a number)
//now converting string to boolean
// let name="tanmay";
// let stringboolean=Boolean(name);
// console.log(typeof stringboolean);//boolean
// console.log(stringboolean);//true
// let name="";
// let stringboolean=Boolean(name);
// console.log(typeof stringboolean);//boolean
// console.log(stringboolean);//"" emptystring return false 
// let name=null;
// let stringboolean=Boolean(name);
// console.log(typeof stringboolean);//boolean
// console.log(stringboolean);//false null return values 0
// let name=undefined;
// let stringboolean=Boolean(name);
// console.log(typeof stringboolean);//boolean
// console.log(stringboolean);//false undefined return value is NaN
//now coverting bollean to number
// let loggedIn=true;
// let booleannumber=Number(loggedIn);
// console.log(typeof booleannumber);//number
// console.log(booleannumber);//1
// let loggedIn=false;
// let booleannumber=Number(loggedIn);
// console.log(typeof booleannumber);//number
// console.log(booleannumber);//0
//now converting boolean to string 
// let loggedIn=true;
// let booleanstring=String(loggedIn);
// console.log(typeof booleanstring);//string
// console.log(booleanstring);//true
// let loggedIn=false;
// let booleanstring=String(loggedIn);
// console.log(typeof booleanstring);//string
// console.log(booleanstring);//false
//**** case important real  */
let age = "20";

console.log(age + 5);        // "205" 
console.log(Number(age) + 5); // 25 



