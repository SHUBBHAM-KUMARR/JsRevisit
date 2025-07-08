// arrays are orderd datatype and are type of object in js
const lang = ["javaScript", "python", "c++", "c","java"]
console.log(lang)
console.log(typeof(lang))//object

// we can get value by calling its index
console.log(lang[0]);//javaScript in js indexing start from 0

console.log(lang[1,2,3])// this is a bad practise but in result we get the last index we enter
// console.log(lang([1 ,2, 3]))// returns lang is not a function
console.log(lang.length);


