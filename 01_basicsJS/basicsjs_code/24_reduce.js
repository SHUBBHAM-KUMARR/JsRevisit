//.reduce() is a method that takes an array and reduces it to a single value by running a function on each item, one at a time.

const nums = [1,2,3,4,5]
const newNums = nums.reduce((accumulator,currentIndex)=>{
  console.log(`acummulated value : ${accumulator}  and currentIndex : ${currentIndex}`);
  return accumulator * currentIndex //dont forget to return the value of newNums
},1)

const cart = [
  { name: "js", fee: 100 },
  { name: "css", fee: 80 },
  { name: "react", fee: 120 },
  { name: "node", fee: 110 },
  { name: "fullstack", fee: 200 },
  { name: "python", fee: 90 },
  { name: "c++", fee: 130 },
  { name: "ml", fee: 150 },
  { name: "uiux", fee: 95 },
  { name: "devops", fee: 105 }
];

const carCheckout = cart.reduce((accumulator,items)=>{
 return accumulator+items.fee
},0)
