/*varibles let const var*/
/*assume you want to take user deatils for bank account so how you store daatat in mememory you use some keywords to storethat data so those keywords are know as variables three  types let ,var ,const*/
 const accountNumber=123456;
let accountHoldername="Jon doe";
var accountbalance=5000;
console.log(accountNumber);
console.log(accountHoldername);
console.log(accountbalance);
accountCity="Jaipur";
console.log(accountCity);
accountHoldername="tanmay";
accountbalance=7000;
accountCity="delhi";
// accountNumber=654321;

console.table([accountHoldername,accountNumber,accountbalance,accountCity]); 
//undefined variables
// let accountId;
// console.log(accountId)
const userA = { name: "Tanmay" };
const userB = userA;
userB.name = "Jaipur";
console.log(userA.name); // What prints and WHY? (Refer to your memory.js notes)