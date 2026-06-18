//method 1 
// const form=document.querySelector('form');
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const height=Number(document.querySelector('#height').value);
//     const weight=Number(document.querySelector('#weight').value);
//     const result=((weight)/(height*height)*10000).toFixed(2);
//     console.log(result);
//     resultbmi=document.querySelector('#result');
//     resultbmi.innerHTML=`your BMI IS${result}`;
// });


//method2 
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    var results=document.querySelector('#result')

    if(height=== ''|| isNaN(height) || height<0){
        results.innerHTML="please enter a valid height";
    }
    else if(weight=== '' || weight<0 || isNaN(weight))   {
        results.innerHTML="please enter a valid weight"
    }
    else{
         var result =((weight)/(height*height)*10000).toFixed(2);
         results.innerHTML=`your actual bmi is ${result}`;
    }
    const category= document.querySelector('#category');
    if(result<=18){
category.innerHTML="underweight";
    }
    else if(result<=25 && result>=18){
        category.innerHTML="normal range"
    }
    else{
        category.innerHTML="overweight"
    }
});