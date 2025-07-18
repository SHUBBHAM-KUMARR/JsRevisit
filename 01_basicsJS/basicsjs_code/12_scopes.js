//we know that let and const are block scoped and var is function scoped element
// {}this is called a scope when it comes in use with function/loops/conditions or any where there a particular range of code is needed . Dont confuse it with object as there it is an object declartion thats it 

// its all bout leakage of a value from a block scope and declarations 

if(true){
  let a = 10;
  const b = 20;
  var c = 30;

}

// as we know that let and const won't be logged outside the scope but let see var
console.log(c);// yup! it leaked 30 and like this it creates toomany bugs just think you will have store somevalue in variable a and used var delcaration in many other scopes loops conditions then you can guess the bugs that will errupt

//When we nest one or more functions, loops, or conditionals, the value of a variable declared with let in an outer scope is accessible inside the inner scopes, but the reverse is not true.

// let us see this in function
function one (){
  const username = "shubham"
  function two(){
    const website = "github" 
    console.log(username);//see we can  log the variable of username in fuction two as  variables in function two are like global scope for funtion two
    console.log(website);
    
  }
  // console.log(website);//here we get an reffrence error , ReferenceError: website is not defined
  two()
}
one()

//  declaration of function makes a difference

console.log(addOne(5));//return 6 , here comes the hoisting to the show

function addOne(num){
  return num+1
}


console.log(addTwo(7));//we cannot assign value like this

let addTwo = function(num){
  return num+2
}

