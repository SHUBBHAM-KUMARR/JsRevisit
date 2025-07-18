// iife is used to tackle the pollution of variable in global scope 

// (declarefunction)(invokeImmediately); //here this semicolon is neccessary for ending the function.

(function greet(){
  console.log("good morning");
  
})(); //good morning 

console.log("shubham"); //shubham  // we to use ';' till we write another iffe if we remove this ';' it throws a type error 

(function greetAgain(){
  console.log("good morning");// thros error,type error this is why we need ';' to end an iife
  
})()
