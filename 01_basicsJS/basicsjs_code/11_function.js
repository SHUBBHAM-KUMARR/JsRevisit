// in function we parameters which delared at initialisation

/**function(parameters){
  // code b
  return   // returns value or variable s
}*/

function addTwoNumbers(num1,num2){
  let result = num1 + num2
  return result //In js, you use return inside a function to send a value back to wherever the function was called.
  console.log(result);// it will be ignored  because any code after return is not executed
  
}// without invoking functionn is not executed

console.log(addTwoNumbers(9,9));//18

function addTwoNumbersNew(num1,num2){ 
 console.log(num1+num2);
 
}
addTwoNumbersNew(8,8)//16 this function addes numbers inside the block so we dont need to put in variable but it returns no value 

const value  = addTwoNumbersNew(86,14)//100
console.log(value);// undefined
//here we have  not returned any value so js take it as undefined

function greet(name){
  return `Hey! ${name}  goodmorning`
}
greet("Shubham")// again this will not logged in our termnal we need to log it first
console.log(greet("Shubham"));//Hey! Shubham  goodmorning
//you can see its use without the log in practise/greet.html

// in some of products like a shopping cart wishlist watch later we are unknown about the number ofitems that will we added by user in that case
// we can use rest operator 
const calculateartPrice =  function(num,item){
  return `₹ ${num}  ${item} `
}
console.log(calculateartPrice(2));//it adds rs 2 undefined, product in cart
console.log(calculateartPrice( 2,"watch"));//₹ 2  watch 

// but in a cart we have lots more items some are need some are want some are wish

// rest operator, we just add ...before our parameter

const calculateartPriceNew = function (...num) {
  return`₹ ${num}`,num
}
console.log(calculateartPriceNew(2,3,4,5,6));//₹ 2,3,4,5,6 // for num it return an array [ 2, 3, 4, 5, 6 ]

//we need to modify this code for adding up multiple elements

const calculateartPriceMulti = function(...value){
  
  for(let i = 0 ; i <= value.length;i++){
    const num = value[i]
    for(let j = i+1; i<= value.length;j++){
      const items = value[i+1]
     if(num && items){ 
       return value
     }
    }
  }
}
console.log(calculateartPriceMulti(2,"watch",3,"sleevelsess"));//[ 2, 'watch', 3, 'sleevelsess' ]
console.log(calculateartPriceMulti(222,2222));//[ 222, 2222 ] here we get these values in our array  that mean this code or the code earlier just add both the item and price as values not verfying its type which is obvious as itself is an arrayfor this we can make two arrays diffrentley  for storing items 

// we can use function to get values inside multipe objects 

const user = {
 username:"instauser",
 password:"insta@user000"
}
const user2 = {
  username:"fbuser",
  password:"fb@user111"
}
function getUserDetails(anyObject){
  return`username is ${anyObject.username} and the password is ${anyObject.password}`
}
console.log(getUserDetails(user));//username is instauser and the password is insta@user000
console.log(getUserDetails(user2));//username is fbuser and the password is fb@user111

// we can driectlay give the value in the function

const direct =  getUserDetails({username:"pookyBaba",password:"itsAJoke"})
console.log(direct);

// we can do same with array

const array = ["shubham","kumar","kaushik"]
function getArray(anyArray){
return anyArray[0] 
}
console.log(getArray(array));//shubham

// we can directly put the values in log 
console.log(getArray([9,6,7,8]));//9

