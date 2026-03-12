//logical or coding question
//ques 1 
console.log(Array.isArray([]));//true 
//ques2 
//console.log([]==[]);//false
//console.log([] === []);//false
//तुलना का नियम: JavaScript में जब हम दो Objects या Arrays की तुलना करते हैं, तो वह उनकी "वैल्यू" नहीं देखता, बल्कि उनका "मेमोरी एड्रेस" (Refernce) देखता है। चूंकि दोनों अलग-अलग जगह बने हैं, इसलिए उनका रेफरेंस मैच नहीं होता और परिणाम false आता है।

//नोट: यह == और === दोनों के लिए false होगा क्योंकि दोनों ही मामलों में एड्रेस की तुलना की जाती है.
// ques 2 The Const Illusion:

// JavaScript
// const colors = ["red", "green"];
// colors.push("blue"); // Will this error?
// // colors = ["yellow"]; // Will this error?
// Question: Why can you modify the contents of a const array but cannot reassign the variable itself?
//ans The Address is Constant: When you declare an object or array with const, you are telling JavaScript that the reference (the memory address in the Heap) is locked. You cannot point that variable to a different "box" or memory location.
//The Content is Mutable: const does not make the data itself unchangeable; it only makes the binding unchangeable. Think of it like a house: const means you cannot change your home address (the reference), but you are perfectly free to move the furniture around inside the house (the content).