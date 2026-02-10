// //stack(primitive datatype ) vs heap(object non primitive datatype) memory allocation
// //stack memory allocation
// let a=10;
// let b=a;
// b=20;
// console.log(a);//10;//stack memory allocation means copy of value is stored in new variable
// console.log(b);//20
// //heap memory allocation
// let obj1={
//     c:10,
//     name:"tanmay"
// };
// let obj2=obj1;
// obj2.c=20;
// console.log(obj1.c);//20;//heap memory allocation means reference of value is stored in new variable
// console.log(obj2.c);//20