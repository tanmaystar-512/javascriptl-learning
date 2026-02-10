// //numbers and maths 
// const score=400;
// const balance=new Number(200);
// // console.log(balance)
// // console.log(score) 
// //now usig tostring()
// console.log(balance.toString().length);//tostring converts numbers into string and allow it to asscess string properties 
// console.log(typeof balance); 
// //console.log(balance.length) 
//tofixed()->The .toFixed() method (5:41) is useful for controlling decimal precision, especially in e-commerce applications for displaying prices
// const price=120;
// console.log(price.toFixed(2));//120.00
// console.log(price.toFixed(1));//120.0
// //toprecision-.
// 
//tolocalestring()->Numbers can be formatted with locale-specific commas using .toLocaleString() (9:08), such as en-IN for Indian standards (9:37).
// const nu
// l  mber=1000000;
// console.log(number.toLocaleString());
// console.log(number.toLocaleString('en-IN'))//en-india for indian measure 
//for max,min,safevalue of number you cna sse it in in console in browser 
//maths
// console.log(Math);  
// console.log(Math.abs(-5));//absolutevalue - ko + mai convert kartah hai 
// console.log(Math.round(4.98));
// console.log(Math.ceil(3.8))//reteurns 3 ceil used to return large value 
// console.log(Math.floor(4.8))//returns 5 floor used to return small value 
// //console.log(Math.SQRT2(5))
//this  math libaray is used in math random 
//math.random lies b/w 0 and 1
console.log(Math.random());//range 0<=math.random<1 equals to zeo but not 1 
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// //number starting from 1 insteda of zero 
// console.log(Math.floor(Math.random()*10)+1)
// //countining rnadom numers in dice from 1t0 6 so we need
// example_1console.log(Math.floor(Math.random()*6)+1); //we mutlipy y 6 because - random number range [0,1)so mutlipy by 6->[0,6) which mean s[0to 5.999 something]so we add +1 then becomes [0,6)thats how it work now it generates random number b/w 0 to 6 ok
//example_2 geenrate otp from 1000t0 9999
//console.log(Math.floor(Math.random()*9000)+1000);
//**impoartan */
//if we wnat to decalre or generate random random numbers b/w two numbers then we use max and min 
//for finiding numbers b/w max and min we use =(max-min+1)
//ex->
// let max=20;
// let min=10;
// console.log(Math.floor(Math.random()*(max-min+1))+min);