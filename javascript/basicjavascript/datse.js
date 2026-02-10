//about date which is consider as  instance of an objject 
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
 console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
//let create dates or allocate date 
let createDate=new Date(2026,3,27);//ek format yhe 
//console.log(createDate.toLocaleString());
//dusra format hai jese mm/dd/yyy
let myCreateDate=new Date("01-28-2026");
//console.log(myCreateDate.toLocaleString());
//time s 
let myTime= Date.now();
//console.log(myTime);//time millisecond mai ataa hai 
//console.log(myCreateDate.getTime());//ok yhe myCreateDate.getTime() isyel kiya kyoki date objetc hai ussse time mili  second mai nikala taki usse time kai sath compare kar sake  for ex jab koi hottel ki booking hoti hai tho us din kis time per hui bha pai use aa tha hai
//now to get in secons divided by1000
//console.log(Math.floor(Date.now()/1000));
//now if want to extarct date day month hour milisecond so we can use it s properties 
// let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);//+1 because month ki indexing 0 sai chalu hoti hai 
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
//if want to customize our format of date so we can by using this 
//so this is how you can customize but dont get confuse agagin newDate is no keywoard or syntax its a varaible ok  so now rember that 
// let newDay=new Date();
// let day=newDay.toLocaleString(
//     'default',{
//          weekday:"long",
//          //timezone:""
//     }
// );
// console.log(day);
// const today = Temporal.Now.plainDateISO();
// console.log(today.toString());

