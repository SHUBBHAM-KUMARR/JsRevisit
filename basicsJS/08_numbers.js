const classSize = 50;
console.log(classSize); //50

const age = new Number(19);
console.log(age); //[Number:19]

console.log(age.toString().length);
console.log(age.toFixed(2)); //19.00 this method fixes the decimal places


// for rounding off numbers we can use toPrecision method

const dec = 88.4897;
const dec2 = 188.7897;
const dec3 = 1188.7897;
console.log(dec.toPrecision(4));//88.49
console.log(dec2.toPrecision(9));//188.789700
console.log(dec3.toPrecision(2));//1.2e+3

