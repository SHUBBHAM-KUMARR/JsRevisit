// parent class
// children class are 7
const parent = document.querySelector('.parent')
console.log(parent);//output is parent div

console.log(parent.children);//html collection 

console.log(parent.children[0].innerHTML);//monday
// ---------------------------------------

// looping through each element

// for(let i = 0; i<parent.children.length;i++){
//   console.log(parent.children[i].innerHTML);
  
// }
//let convert it to an array

const arr1 = Array.from(parent.children)
console.log(arr1)
console.log(parent.children);
// ----------------------------------------

//  creating a new element

const newDiv = document.createElement('div')

parent.append(newDiv)
newDiv.innerHTML = "Sunday is my fav day."

const arr2 = Array.from(parent.children)
console.log(arr2)
// function createElement (name){
//   document.createElement(`${name}`)
// }

console.log(arr2);//here we cant set bg color using nth child property in css
//our div in console doesnot have any attribute though in 

newDiv.setAttribute("class","children")

console.log(parent.children);//Now we have attribute named class and and value children  


