
//usinfg for loop 

// const style=document.querySelectorAll(".style");
// const body=document.querySelector("body");
// console.log(typeof(style));
// console.log(typeof(style[0]));
// for(let i=0;i<style.length;i++){
//     console.log(style[i]);
//     style[i].addEventListener('click', function(s) {
//         console.log(s.target);
//     if(style[i]==style[0]){
//         // method 1 body.style.backgroundColor="black";
//         //method 2 
//         if(s.target.id=="black"){
//             body.style.backgroundColor=s.target.id;
//         }
//     }
// if(style[i]==style[1]){
//         // method 1 body.style.backgroundColor="black";
//         //method 2 
//         if(s.target.id=="white"){
//             body.style.backgroundColor=s.target.id;
//         }
//     }
//     if(style[i]==style[2]){
//         // method 1 body.style.backgroundColor="black";
//         //method 2 
//         if(s.target.id=="red"){
//             body.style.backgroundColor=s.target.id;
//         }
//     }
//     if(style[i]==style[3]){
//         // method 1 body.style.backgroundColor="black";
//         //method 2 
//         if(s.target.id=="blue"){
//             body.style.backgroundColor=s.target.id;
//         }
//     }
//     }
// );
// }

//using for loop and another method  3 
// const style = document.querySelectorAll(".style");
// const body = document.querySelector("body");

// for(let i = 0; i < style.length; i++) {
//     style[i].addEventListener('click', function(s) {
        
//         // IF condition hata di, taaki har button par kaam kare
//         // s.target.id wahi color hoga jo button ki ID mein hai
//         body.style.backgroundColor = s.target.id; 
        
//     });
// }

// now for loop an d switch case method  4 
// const style = document.querySelectorAll(".style");
// const body = document.querySelector("body");

// for(let i = 0; i < style.length; i++) {
//     style[i].addEventListener('click', function(s) {
//         switch(s.target.id) {
//             case "black":
//                 body.style.backgroundColor = "black";   
//                 break;
//                 case "white":
//                     body.style.backgroundColor="white";
//                     break;
//                     case "red":
//                     body.style.backgroundColor="red";
//                     break;
//                     case "blue":
//                         body.style.backgroundColor="blue";
//                         break;
//                         default:
//                             body.style.backgroundColor="white";
//         }
//     });
// }


//method 5 using forEach
const style = document.querySelectorAll(".style");
const body = document.querySelector("body");
style.forEach(function(button) {
    button.addEventListener('click',function(s){
        body.style.backgroundColor=s.target.id;
    })
});