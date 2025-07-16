//for eachis a method 

const day = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

day.forEach(function(index){console.log(index);
})
/**monday

tuesday
wednesday
thursday
friday
saturday
sunday
 */
// we can do same with arrow function
day.forEach((newIndex)=>{console.log(newIndex);
})
/**
 * monday
tuesday
wednesday
thursday
friday
saturday
sunday

 */

// same same but different , same output , process differentn  :)
// printing index value array list
day.forEach((value,index,arraylist)=>console.log(`index is ${index}. Value is ${value} of array [${arraylist}] `) // output => index is 0 . Value is nonday of array list [arraylist has list of all values in array]

)//note here we cant change the position of params but let see what happens
day.forEach((index,arraylist,value)=>{console.log(`index is ${index}. Value is ${value} of array [${arraylist}] `)})//index is monday. Value is monday,tuesday,wednesday,thursday,friday,saturday,sunday of array [0]

// let applythis on objects
const randomObjects = [
    { id: 1, name: "Alpha", value: Math.floor(Math.random() * 100) },
    { id: 2, name: "Bravo", value: Math.floor(Math.random() * 100) },
    { id: 3, name: "Charlie", value: Math.floor(Math.random() * 100) },
    { id: 4, name: "Delta", value: Math.floor(Math.random() * 100) },
    { id: 5, name: "Echo", value: Math.floor(Math.random() * 100) }
];


randomObjects.forEach((index)=>{console.log(index.name);// we get the namses alpha brava ....
})

// here we learned that the index in foreach method named the each value index since value is an object and we know that object's value are called by  object.key  so here it is index.name  index key calls value name 


// filter

const num = [1,2,3,4,5,6,7]

const newNum = num.filter((value)=>{
  return value>3
})
console.log(newNum);//[4,5,6,7]
