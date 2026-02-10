//string 
//normal string declartion using "",'' 
const userName="Tanmay Baheti";
//console.log(userName);
const userName2='Tavish';
//console.log(userName2);
//string using backticks `` it is modern way to declare string and it allows multi line string and string interpolation we can insert variable using ${}
//console.log(`${userName} is a Full stack developer and ${userName2} is a designer`);
// const aboutUser=`My name is ${userName}\ni am learning javascript.`;
// console.log(aboutUser);
//console.log(`My name is ${userName}\ni am learning javascript.`);
//console.log(`My name is ${userName}\ri am learning javascript.`);

//esacpe sequence characthers
//\n - newline,\t -tab,\\ -backslash,\' -single quote,\" -double quote,\r -carriage return
//const sample='This is a \'sample\' string with \"double quotes\" and \\backslash\\ ';
//console.log(sample);
//methods and properties of string 
//length of string
//console.log(userName.length);
//console.log(userName2.length);

//upper case and lower case 
//console.log(userName.toUpperCase());
//console.log(userName2.toLowerCase());
//slice use to print caharatcher from start to end (0,4) but till 4 include not 4 include for ex
//console.log(userName.slice(2,4));
// if we use slice(2) so from 2 to end 
//console.log(userName.slice(4));
//replace()-used if we want to repalce any thing in our srting repalce("pattern","replacement")
//console.log(userName.replace("Baheti","Bro"))
//concat->The concat() function concatenates the string arguments to the calling string and returns a new string.
//f the arguments are not of the type string, they are converted to string values before concatenating.
//concat(str1,str2)
//console.log(concat(userName,userName2));//The first line fails because concat is not a global function, while the second works because concat is a method of String objects.
//console.log(userName.concat(" ",userName2));
//trim()-to remove whitespaces
// console.log(userName.trim());
// console.log(userName);
// console.log(userName.trimEnd());
// console.log(userName.trimRight());//trimRight modifies to trimEnd and there work is to remove white space from end 
// console.log(userName.trimStart());//remove value from start 
// console.log(userName.trimLeft());
//accscsecing charather  from string 
// console.log(userName[4]);
// console.log(userName.charAt(5));
// console.log(userName.indexOf("Baheti"));//7
// console.log(userName.indexOf("N"));//-1
// console.log(userName.indexOf("a"));//1because javav script reternfirst index from left to right excecution  from left to right 
// //if wnat kast index then use last lastindex
// console.log(userName.lastIndexOf("a"));//8 now js runs from right to left 
//split()-split bereaks the string in form of arary spilt(seprator,array)
//console.log(userName.split("i"));
//console.log(userName.split("",4));
//substirng() not use for negative index because it returns 0 and it index auttomatically swap value
//console.log(userName.slice(-4,-1));
//het because it follow :Rule you must apply for slice(start, end)

// Negative index → length + index

// Extraction happens only if start < end

// If start >= end → result is empty string
//ex:
// Step-by-step

// -4 → 13 - 4 = 9

// -1 → 13 - 1 = 12

// So this becomes:

// userName.slice(9, 12)

// console.log(userName.slice(-1,-4)); even after coneverting negative vakues it becomes from (12,9) but it does not swap value so no extraction
// console.log(userName.slice(4,2));//no value swap
