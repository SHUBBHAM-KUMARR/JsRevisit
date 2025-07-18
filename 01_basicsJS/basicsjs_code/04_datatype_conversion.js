let score = "33"; //coming from user
console.log(typeof score); //string

score = Number(score); // converion at backend
console.log(typeof score); // number

let score1 = "33tt"; // comitng form user
console.log(typeof score1); //string

score1 = Number(score1); // conversion in backend
console.log(typeof score1); // number

// but if we store it in a different variable

let a = score;
let b = score1;
console.log(score); // 33 which is number dataype while
console.log(score1); //NaN(not a number) here we can see that the value of b is NaN which is a datatype itself quite confusing right
//  "33tt" is not a valid number, so Number("33tt") becomes NaN, but typeof NaN is still "number"! it means that our score1 = Number(score1) is converting this NaN to number

// check string
let k = 44;
let m = String(k);
console.log(m, typeof m); //44  string no problem here
let d = Boolean(k);
console.log(d, typeof d); //true boolean
let e = Symbol(k);
console.log(e, typeof e); //symbol(44) and symbol

let f = BigInt(k);
console.log(f, typeof f); //44n type BigInt

// let k2 = "55tt"
// let f2 = BigInt(k2);
// console.log(f2,typeof f2);// "33tt" is not a valid number, so Number("33tt") becomes NaN, but typeof NaN is still "number"!

// here we can see that
//  datatype     conversion    output
// string         number       number(but value in NaN)
// number         string       string
// boolean        number        true
// bigint         string        string
// string         bigint        not valid
// datatype       boolean        true

//**********************operations************************************** */

let value = 3;
let nVal = -value;
console.log(nVal); // -3 as - operator in prefix converts a positive value to negative   and positive from negative

// + - / %(modulus i.e. is remainder) * **

let str = "shubham";
let str1 = " kumar";
let str2 = str + str1;

console.log(str2);

console.log("1" + 1); //11
console.log("1" + 1 + 2); // 122 here priority has been given to string 1 as it is the first to get parsed
console.log(1 + 2 + "3"); //33

console.log(+"3");

//*****************stack and heap memory */

//  primitive datatype are stored in stack and non permitive dataype is stored in heap

// stack returns the copy of the value stored in it to the variable
let valOne = "shubham";
let valTwo = valOne;
valOne = "kumar";
console.log(valTwo); //shubham / here we can see that valTwo stores the copy of value stored in valOne though its value is changed in line 74.

// for example you write a on first page and copied it on another page . If you erase the a on first page , in another page it reamains as it is.

//heap gives the reference to the variable
const arrHeap = ["one", "two", "three"];
const arrHeapTwo = arrHeap;
// now if we change the value in this arrHeapTwo the value will be changed in arrHeap
arrHeapTwo.push("four");
console.log(arrHeap); //[ 'one', 'two', 'three', 'four' ]
arrHeap.unshift("zero");
console.log(arrHeapTwo); //[ 'zero', 'one', 'two', 'three', 'four' ]
