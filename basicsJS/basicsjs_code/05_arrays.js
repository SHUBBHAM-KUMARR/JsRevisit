// arrays are orderd datatype and are type of object in js
const lang = ["javaScript", "python", "c++", "c", "java"];
console.log(lang);
console.log(typeof lang); //object

// we can get value by calling its index
console.log(lang[0]); //javaScript in js indexing start from 0

console.log(lang[(1, 2, 3)]); // this is a bad practise but in result we get the last index we enter
// console.log(lang([1 ,2, 3]))// returns lang is not a function
console.log(lang.length);

//methods pop
let cars = ["bentely", "volkswagon", "TATA", "Mahindra", "Maruti"];

cars.pop();
console.log(cars); //[ 'bentely', 'volkswagon', 'TATA', 'Mahindra' ]
cars.pop();
console.log(cars); //[ 'bentely', 'volkswagon', 'TATA' ]

console.log(cars.length); //3
// every time we log the pop the last index get deleted

cars.push("Jaguar");
cars.push("BMW");
console.log(cars); //[ 'bentely', 'volkswagon', 'TATA', 'Jaguar', 'BMW' ]

console.log(cars.length); //5

// every time we push items it get stored at last index
let a = cars.pop();
console.log(a); //BMW it returns the item popped from last index

let b = cars.push("Nano");
console.log(b); //it returns the index at which the item pushed
let c = cars.push("Jimny");
console.log(c); //6

// let us make an  object and push it's value

let obj1 = { name: "shubham kumar", id: "TPS122112" };
let obj2 = {};
let obj3 = {};
let obj4 = {};
let obj5 = {};

let arr = [];
arr.push(obj1);
console.log(arr); //[ { name: 'shubham kumar', id: 'TPS122112' } ]

obj1.name = "Satyam Singh";
console.log(arr); //[ { name: 'Satyam Singh', id: 'TPS122112' } ]

// clear as it is if change the vlaue it gets changed in array too
//now let perform push and pop in this
arr.pop();
console.log(arr); //[]
arr.push(obj1);
console.log(arr); //[ { name: 'Satyam Singh', id: 'TPS122112' } ] it returns the last update in object

//unshift and shift

let state = ["BR", "JH", "UP", "MP", "WB"];

let rm = state.shift(); //index[0] items will be removed
console.log(rm, state); //BR [ 'JH', 'UP', 'MP', 'WB' ]

let ad = state.unshift("BR");
console.log(ad, state); //5 [ 'BR', 'JH', 'UP', 'MP', 'WB' ]

//clear as it is

// in array we can use objects too

const car = [
  {
    name: "shubham kumar",
    id: "TPS123",
    result: "pass",
  },
  {
    name: "Ravi S",
    id: "TPS124",
    result: "prometed",
  },
  {
    name: "Lokesh",
    id: "TPS125",
    result: "Distinction",
  },
];

console.log(car[0].name, car[0].result);
console.log(car[1].name, car[1].result);
console.log(car[2].name, car[2].result);

console.log(car[0].name, car[0].id);
console.log(car[1].name, car[1].id);
console.log(car[2].name, car[2].id);
// ++++++++++++++++++++++++++++++++arrays more on+++++++++++++++++//
const carMahindra = ["thar","scorpio","bolero","xuv700"]
const carSuzuki = ["swift","jimny","baleno","dzire"]

// let see pushin  carSuzuki in carMahindra
carMahindra.push(carSuzuki)
console.log(carMahindra);// ['thar','scorpio','bolero','xuv700',[ 'swift', 'jimny', 'baleno', 'dzire' ]]
// if we want to access  the value 
console.log(carMahindra[4][0]);//swift

// if we want to push values of one array to anaother 

//  we can use spread operator and concatenate

//concatenate

const carMahindraNew = ["thar","scorpio","bolero","xuv700"]
const carSuzukiNew = ["swift","jimny","baleno","dzire"]

const carNew = carMahindraNew.concat(carSuzukiNew)
console.log(carNew);/**[
  'thar',   'scorpio',
  'bolero', 'xuv700',
  'swift',  'jimny',
  'baleno', 'dzire'
]*/

//spread operator

const carNewer = [...carMahindraNew,...carSuzukiNew]
console.log(carNewer);/**[
  'thar',   'scorpio',
  'bolero', 'xuv700',
  'swift',  'jimny',
  'baleno', 'dzire'
] */

  // we can make arrray from other datatype
  const name = "shubham"
  console.log(Array.isArray(name));//false 
  console.log(Array.from(name));//['s','h','u','b','h','a','m']
  
  
