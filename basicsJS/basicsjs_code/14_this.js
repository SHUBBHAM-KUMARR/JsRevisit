"use strict"
console.log(this);//{empty objects}
function checkThis (){
  console.log(this);
  
}
checkThis()
/** in strict mode it returns undefined but in regular it returned this values 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}

*/

//  let we put this in an arrow function

let check = ()=>{console.log(this);}// return an empty object
check()

// we can use this keyword to access value of a Object.keyword in a function inside a boject

const JsUser = {
  username:"shubham",
  price:899,
  greetings:function(){console.log(`good morning ${this.username}`);} //good morning shubham not using this throws a refference error
   
}
JsUser.greetings()//shubham
// greeitngs() //not defined 
JsUser.username = "jagdish"
JsUser.greetings()//jagdish

