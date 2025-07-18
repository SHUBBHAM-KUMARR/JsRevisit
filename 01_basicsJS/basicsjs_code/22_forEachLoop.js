// recall => when we use {} we need to return our value and if we use () or just write our args we may not need to return value i.e value is returned itself 


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

// can we same with for each loop not actually as our foreach does not return anything

// but we can make our code work using condition as we did earlier

const newNums = []
 num.forEach((value)=>{
  if(value > 3){
    newNums.push(value)
  }
 
  
})
console.log(newNums);

//filtering objects
const books =[
  {
    "title": "echoes of tomorrow",
    "genre": "fictional",
    "publish": 2019,
    "edition": "1st"
  },
  {
    "title": "whispers in the pines",
    "genre": "drama",
    "publish": 2021,
    "edition": "2nd"
  },
  {
    "title": "the last ember",
    "genre": "fantasy",
    "publish": 2018,
    "edition": "3rd"
  },
  {
    "title": "beneath crimson skies",
    "genre": "history",
    "publish": 2020,
    "edition": "1st"
  },
  {
    "title": "fractured minds",
    "genre": "thriller",
    "publish": 2022,
    "edition": "1st"
  },
  {
    "title": "digital horizons",
    "genre": "nonfiction",
    "publish": 2017,
    "edition": "4th"
  },
  {
    "title": "garden of lost dreams",
    "genre": "romance",
    "publish": 2023,
    "edition": "1st"
  },
  {
    "title": "quantum shadows",
    "genre": "science",
    "publish": 2016,
    "edition": "5th"
  },
  {
    "title": "the art of stillness",
    "genre": "philosophy",
    "publish": 2015,
    "edition": "2nd"
  },
  {
    "title": "voices from the dust",
    "genre": "mystery",
    "publish": 2024,
    "edition": "1st"
  }
]


const userBook = books.filter((bk)=> bk.genre ==='mystery' )
console.log(userBook);

// -------------------------------------------------------------------------------------------------

const numbers= [1,2,3,4,5,6,7,8,9,10] // we can use map() in similar wy to update a value
// let u here add  10 to each vlaue

const newNumbers = numbers.map((val)=> val+10)
console.log(newNumbers);/**[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/ //we got our desired result 




