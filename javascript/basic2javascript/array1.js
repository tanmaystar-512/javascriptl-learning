//arary 
//array is an type of of non primitive dtatype it data type is object and in js array can stoer diffrent satat types inside it and in array indexing start from 0
const arr=[0,1,2,3,6,4];
//console.log(arr);
//console.log(arr[5]);
const mixedarr=[1,"shaktiman",true,undefined];
//console.log(mixedarr);
//console.log(mixedarr[1]);
//methods of arary 
//1.push-to add element
// console.log(arr.length);
// arr.push(8)
// arr.push(9)
// arr.push(10)
// console.log(arr)
// //now pop-used to remove element
// arr.pop()
// console.log(arr)
// arr.pop()
// arr.pop()
// console.log(arr)
//3.unshif()-used to add element in starting
//arr.unshift(8)
//console.log(arr)
//arr.unshift(9,10)//9,10,8,0,1,2,3,6,4
//console.log(arr);
//4.shift-remove the element from starting
//arr.shift()
//console.log(arr)
//arr.shift();
//arr.shift();
//5.includes - check the whwether the value is inside array 
//console.log(arr.includes(9))
//console.log(arr.includes(4))
//6.indexof-return the inde xvalue at which element is present 
//console.log(arr.indexOf(4))//6
//console.log(arr.indexOf(9))//-1
//7join -converts in to string 
//  arr=new  newarrr
//  console.log(newarr.join())
//  console.log(arr)
//console.log(arr.join());
//8.slice- > used when we need to extract the value from the array dont change original array
//slice(start,end)
//console.log(arr)
 //const newarr=arr.slice(1,3)
//console.log(arr)
//console.log(newarr)
//console.log(arr.slice(1,2))
//console.log(arr.slice(0,4))
//console.log(arr.slice(0,5))
//console.log(arr.slice(0,7))
//console.log(arr)
//9 splice-> used when we need to delete value from original array it  do changes in original array
//splice(startcount,deletecount) start count means kaunse index sai delete karna hai or delete count kitne element delete karne hai 
//console.log(arr)
//const nwarr=arr.splice(1,2)
 //console.log(arr)
//console.log(nwarr)
console.log(arr.splice(3,6))
 console.log(arr)
//refer to this link-https://chatgpt.com/share/6980ac02-1864-8000-8a3d-84e11ec87705