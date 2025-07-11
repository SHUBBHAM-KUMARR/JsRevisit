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
const fun = function(){
  console.log("hello wold!");
  
}
console.log(typeof username);
console.log(typeof id);
console.log(typeof cgpa);
console.log(typeof passed);
console.log(typeof placed);
console.log(typeof status);
console.log(typeof sym);
console.log(typeof bignm);
console.log(typeof house);
console.log(typeof fun);

