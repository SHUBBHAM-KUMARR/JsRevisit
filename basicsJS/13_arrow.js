// arrow function are a concise way of writing function rxpression , a function is called an expression whan it is stored in an variable

const expression = ()=>{} // a simple arrow fucntion expresion

// let see if we declare it as a function
(name)=>{ return `${name} is good programmer`}//though not thrown an error but still its not a good practise
//console.log((name));// name is not defined

// now let you can see practie/arrow.html 

const isHeGood =(name)=>{ return `${name} is a good programmer`}
console.log(isHeGood);//[Function: isHeGood]
console.log(isHeGood("Bro"));//Bro is a good programmer

const greet = function(name){
  console.log(`good morning ${name}`);
  
}
setTimeout(greet,3000,"shubham")//good moerning shubham

function greetAgain(name){
 return `good morning ${name}`
}
setTimeout( greetAgain,5000,"shubham")// returns nothing as greetAgain returns a string only we have not logged the value so we dont get any error or log value
setTimeout(() => console.log(greetAgain("Alice")), 5000);//this prints  the result 

// we can execute a arrow function in same line without return keyword

const addnums = (num1,num2)=> (num1+num2)//it is called implicit return 
  console.log(addnums(8,9));//17
