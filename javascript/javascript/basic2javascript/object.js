//objects
//1.ways of declaring object
//Singleton Concept (1:15-1:56):
//When an object is created using a constructor, it forms a singleton, meaning it's a unique instance of its kind (1:25).
//Objects created using literals are not singletons (1:46). You don't need to deeply understand this for now, just be aware for interviews (1:38).
//a counstructour- object.create
//b.Literals (2:00): This is the most common way. You define an object using curly braces {}. 
//const mysym=symbol("mykey")
const user={
    name:"Tanmay",
    "full name":"tanmay baheti",
    age:18,
    mysym:"key1",
    location:"Jaipur",
    mobno:9523456780,
    email:"tanmaygoogle@.com",
    loggedIn:true,
    lastLoggedDay:[19,20,30,50]
};
//asscesing object 
//1using dot -> now there is wriiten "full name" - which can not be assesseced 
//console.log(user.name)
//console.log(user.email)
//console.log(user.lastLoggedDay);
//console.log(user.lastLoggedDay[2])
//2.uing square brackets - we can assecs that with space or writen in string 
//console.log(user["full name"])
//console.log(user["email"])
//console.log(user[age]) 
//now seeing symbol 
//console.log(user.mysym)
//changing content of image 
user.email="tanmaymicrosoft@.com"
//console.log(user.email);
//Object.freeze(user)
//user.email="tanmaywipro@gmail.com"
console.log(user)
//function 
user.greeting=function(){
    console.log("hello tavish")
}
//console.log(user.greeting)
//console.log(user.greeting());
user.greeting2=function(){
console.log(`hello user ${this.name}`)}
console.log(user.greeting2)
console.log(user.greeting2());
// here's a summary of today's class on JavaScript Objects, structured for your notes to help you remember the concepts:

// JavaScript Objects: The Core Concepts
// This class focused on understanding Objects in JavaScript, which are fundamental for becoming a JavaScript master. Unlike arrays that use numerical indices, objects use key-value pairs (3:06).

// 1. Declaring Objects (1:10-2:54)

// Two main ways to declare:
// Literals (2:00): This is the most common way. You define an object using curly braces {}. Example: const jsUser = {};
// Constructor (1:13, 2:39): Using Object.create().
// Singleton Concept (1:15-1:56):
// When an object is created using a constructor, it forms a singleton, meaning it's a unique instance of its kind (1:25).
// Objects created using literals are not singletons (1:46). You don't need to deeply understand this for now, just be aware for interviews (1:38).
// 2. Key-Value Pairs in Objects (3:06-5:04)

// Objects store data as key: value pairs.
// Keys are typically strings, even if you don't explicitly write quotes around them (3:47).
// Values can be any data type: strings, numbers, booleans, arrays, other objects, or even functions (4:00-5:04).
// Example: javascript const jsUser = { name: "Hitesh", age: 18, location: "Jaipur", email: "hitesh@google.com", isLoggedIn: false, lastLoginDays: ["Monday", "Saturday"] };
// 3. Accessing Object Values (5:08-7:12)

// Dot Notation (.) (5:16):
// Most common way: jsUser.email
// Limitation: This method cannot be used if the key has a space or is defined as a symbol (6:45-7:12).
// Square Bracket Notation ([]) (5:41):
// Use this when keys have spaces (6:24-7:12). The key must be enclosed in double quotes as a string.
// Example: jsUser["full name"]
// Mandatory for accessing keys defined as Symbols (9:36-9:59).
// 4. Using Symbols as Object Keys (7:18-10:28)

// Symbols are unique primitive data types (7:23-7:26).

// Declaration: const mySym = Symbol("key1"); (7:37-7:45)

// To use a Symbol as an object key, it must be enclosed in square brackets within the object literal (9:36-9:42).

// Example: javascript const mySym = Symbol("key1"); const jsUser = { [mySym]: "mykey1" // Correct way to use a Symbol as a key }; console.log(jsUser[mySym]); // Accessing the Symbol key
// Important: If you don't use square brackets for a Symbol key, it will be treated as a string, not a Symbol (8:10-8:22, 9:01-9:04). This is a common interview question (7:57).

// 5. Modifying and Freezing Objects (10:35-12:32)

// Changing Values: Simply assign a new value to a key using dot or bracket notation (10:41-10:59).
// Example: jsUser.email = "hitesh@chatgpt.com";
// Freezing Objects: To prevent any further changes to an object, use Object.freeze() (11:01-11:21).
// Example: Object.freeze(jsUser);
// After freezing, attempts to change values will not result in an error, but the changes will not propagate (11:22-11:55).
// 6. Adding Functions to Objects (12:35-17:02)

// Functions are "first-class citizens" in JavaScript (12:44-12:47), meaning they can be stored as values in object properties.

// Defining a function within an object:
// javascript
// jsUser.greeting = function() {
// console.log("Hello JS User");
// };

// Executing a function:

// To call the function, use parentheses: jsUser.greeting() (13:28-13:34).
// Without parentheses, you get a reference to the function, not its execution (15:13-15:27). This is crucial for later advanced topics.
// Referencing other object properties within a function (this keyword):

// To access other properties of the same object inside a function, use the this keyword (15:56-16:10).

// Example:
// javascript
// jsUser.greetingTwo = function() {
// console.log(Hello JS User, ${this.name}); // 'this.name' refers to the 'name' property of jsUser
// };
// jsUser.greetingTwo();

// The this keyword's behavior can vary (e.g., in Node.js vs. browser environments), which will be discussed in future lessons (16:22-16:30).

// Key Takeaways for Notes:

// Always understand why you choose dot vs. bracket notation for accessing object properties (17:21-17:39).
// Pay special attention to Symbols and how they are used as keys—a common interview trick (7:57, 10:10-10:28).
// Functions within objects (methods) are powerful, and the this keyword is essential for inter-property communication (15:56).
// By understanding these core concepts, you'll be well on your way to mastering JavaScript objects!



