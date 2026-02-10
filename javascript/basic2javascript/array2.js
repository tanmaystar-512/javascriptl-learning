//array 
//about adding two array 
//1. we sse using push and what its bheaviour 
const cartoon=["doremon","mcqueen","bheem"]
//console.log(cartoon);
const hero=["shaktiman","singham","don"]
//console.log(hero)
//cartoon.push(hero)
//console.log(cartoon.length)
//console.log(cartoon)//[ 'doremon', 'mcqueen', 'bheem', [ 'shaktiman', 'singham', 'don' ] ] 
//console.log(hero)
//hero.push(cartoon)
//console.log(hero)
//console.log(cartoon)
//an array inside array as we learn array can store another array in inside it it make like nested array it change the length of original array
//2 now using concat
//const newarr=cartoon.concat(hero)
//console.log(cartoon)//[ 'doremon', 'mcqueen', 'bheem' ]
//console.log(newarr)//[ 'doremon', 'mcqueen', 'bheem', 'shaktiman', 'singham', 'don' ]
//ok so we get to know it concat does not change original array it needs new array to return or store changes ok
//3.using spread opertaor "... "-> modern way to merge two array
//const relarr=[...cartoon,...hero]
//console.log(relarr)//[ 'doremon', 'mcqueen', 'bheem', 'shaktiman', 'singham', 'don' ]
const luckno=[4,5,6,[2,3],1,[8,[7,4]],[0,[40,[50,60]]]]
//console.log(luckno.flat(Infinity));
//4.flat bhi ek tarike sai jho nested array hai unhe poore ko ek hi aray mai convert kar rha hai but kis depth tak karn ahi bho ham batate hai jasise flat(depth) example given beleow
//console.log(luckno.flat(1))//[ 4, 5, 6, 2, 3, 1, 8, [ 7, 4 ], 0, [ 40, [ 50, 60 ] ] ]
//console.log(luckno.flat(2))//[ 4, 5, 6, 2, 3, 1, 8, 7, 4, 0, 40, [ 50, 60 ] ]
//console.log(luckno.flat(3))//[ 4, 5, 6, 2,  3,  1,8, 7, 4, 0, 40, 50,60]
//5.Array.isArray-> Purpose: A static method that determines whether the passed value is an Array.
//Return Value: Returns true if the value is an array, otherwise false.
//console.log(Array.isArray("Tanmay"))//false
//console.log(Array.isArray([2,2,1,0]))//true
//6.Array.form->Purpose: Creates a new, shallow-copied Array instance from an array-like or iterable object.
////Functionality: It can convert various data types (like strings, NodeList from DOM, or even objects with proper keys/values) into an array.
//console.log(Array.from("tanmay"));//[ 't', 'a', 'n', 'm', 'a', 'y' ]
//console.log(Array.from({name:"tanamy",marks:30}))//returns [] becaus e her  java script does not know what to read keys or values so we need object.keys(),object.values(),objectentries()
//console.log(Array.from(Object.keys({name:"tanmay",marks:30})))//[ 'name', 'marks' ]
//console.log(Array.from(Object.values({name:"tanmay",marks:30})))//[ 'tanmay', 30 ]
//console.log(Array.from(Object.entries({name:"tanmay",marks:30})))//[ [ 'name', 'tanmay' ], [ 'marks', 30 ] ]
//7.Array.of()->Purpose: Creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.
//Difference from Array Constructor: Unlike the Array constructor (e.g., new Array(7) which creates an array of 7 empty slots), Array.of(7) creates an array containing the single element 7.
let score=50
let score1=60
let score2=70
//console.log(Array.of(score,score1,score2))