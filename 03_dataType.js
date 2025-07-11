// let check each data type ,we are not going to chane our values so we will be using const to store our values
const username = "shubham_kr";
const id = 123456;
const cgpa = 8.7;
const passed = true;
let placed; //we used let as const need value immediately it get declared
const status = null;
const sym = Symbol("user");
const bignm = 123445555559893n
const house = {price:"1111111",paint:"red"}
const heros=["iron man","spider man","hulk"]
const fun = function(){
  console.log("hello wold!");
  
}
console.log(typeof username);//string
console.log(typeof id);//number
console.log(typeof cgpa);//number
console.log(typeof passed);//boolean
console.log(typeof placed);//undefined
console.log(typeof status);//object
console.log(typeof sym);//Symbol
console.log(typeof bignm);//bigint
console.log(typeof house);//object
console.log(typeof fun);//function
console.log(typeof heros);//object array is a type of object in js

      