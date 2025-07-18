// here how we declare variable

let name = "shubham";
const id = "TPS" + 123; // since we are revising we should know that this is a concatination and i want my id look like id and revise waht i learned you update any miss conception i am in .....
console.log(id); //TPS123 now let us see if js knows type of data in this case we use typeof()

console.log(typeof name, typeof id); // here it return string(for name which is expected) but for id it returns string !!! as in concatination the string becomes the dominant variable [any number can be string but string cannot be a number js converts 123 to "123" automatically

// now let us inser 123 in ( ) and see waht happens

const id_1 = "TPS" + 123;

console.log(id_1, typeof id_1); // string

// now let us reassign variables
//id = "BN"+112233;

// console.log(id);//throws error as id is stored in constant variable(const)

name = "shubham kumar";
console.log(name); // shubham kumar

// -------------------------------------------------------------------------------------------------------

// scopes
let a = 8;
let b = 8;

if (a == b) {
  let a = 5;
  let b = "5";
  if (a === b) {
    console.log("yes yes"); // when we comment a nd b in if scope
  } else {
    console.log("no no");
    //  output is no no as it checks  a and b  from if block hence let is block scoped
  }
  console.log("yes");
  // output is yes as  this if statement take a and b from global scope that is declared outsite of if statement
}
console.log(a, b);

// ---const----------//
const beta = 9090;
const gamma = "9090";

console.log(beta == gamma); // true as we just check the value
console.log(beta === gamma); // false as we checked strictly the datatype

if (beta == gamma) {
  console.log("yes"); // yes as it takes value from outside the scope

  const beta = 9090;
  const gamma = 9090;
  if (beta === gamma) {
    console.log("yes yes"); //yes yes as it takes from block scope
  } else {
    console.log("no no"); // when we comment the variable in if scope
  }
} else {
  console.log(" no");
}

// here we can see that the let and const are block scoped global scope elements i.e value accessed in if scope just comment the values of  variable  inn if scope

// --var--//

var x = 8;
var y = "8";

console.log(x == y, x === y); // true false

if (x == y || x === y) {
  console.log(x == y);
  console.log(x === y);
  var x = 5;
  var y = 4;
  if (x == y || x === y) {
    console.log(x == y);
    console.log(x === y);
  }
}
console.log(x, y); // here we get 5 , 4 the values declared in if scope hence var is not block scope i.e. value stored in it get leaked and overwrites value of global scope
