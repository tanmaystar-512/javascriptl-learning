//control flow truth statememnet etc 
//if statemeent ok 
// let i=true
// if(true){
//    // console.log("this is true");
// }
// if(false){

// }
//if(3=3){}
// let userlogin=false;
// if(userlogin){
//     console.log("welcome to the website");
// }
// else{
//     console.log("please login to the website");
// }
//comparisoon opeerators ===,==,!=,!==,>=,<=,>,<
// let a=null
// if(a=false){
//     console.log("this is false");
// }
// let b= undefined
// if(b){
//     console.log("this is true");
// }
//if elseif 
// let age="aa";
// if(age>=18){
//     console.log("you can  vote ");

// }
// else if (age<=18){
//     console.log("you are not eligable ")
// }
// else{
//     console.log("please enter the valid age");
// }
//switch statment 
// const day =1;
// switch(day){
//     case 0:
// console.log("today is sunday");
// break;
// case 1:
//     console.log("today is monday");
//     break;
//     case 2:
//         console.log("today is tuesday");
//         break;
//         case 3:
//             console.log("today is wednesday");
//             break;
//             default:
//                 console.log("please enter the valid day");
//                 break;
// }
// //falsy value = 0,-0 ,null,undefined ,false,NaN,"",BigInt(0n)
// //truthy value = " ",[],{},function(){},new Date(),-1,1,BigInt(1n)
// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("this is empty object"); 
//}
//nulish coalescing operator
let username=null;
let defaultname="Guest";
let currentusername=username ?? defaultname;
//console.log(currentusername);
let val1;
val1=5??10;
//console.log(val1);
let val2;
val2=null??20;
//console.log(val2);
let val3;
val3=undefined??30;
//console.log(val3);
let val4;
val4=null??undefined??NaN;
//console.log(val4);//undefined because both are nullish value
let val5;
val5=NaN??40;
//console.log(val5);//NaN because NaN is not nullish 
let val6;
val6=NaN??null;//
//console.log(val6);//NaN because NaN is not nullish
let val7;
val7=NaN??undefined;
console.log(val7);//NaN because NaN is not nullish
//terniary oprtaor 
let age=17;
let canvote=age>=18?"can vote":"cannot vote";
console.log(canvote);