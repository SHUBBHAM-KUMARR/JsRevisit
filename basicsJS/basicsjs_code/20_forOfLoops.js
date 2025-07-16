// these loops are array specific loops

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of arr) {
  console.log(num); // 1 2 3 4 5 6 7 8 9
}

// ti does same with arrays
const username = "shubbham-kumarr";
for (const user of username) {
  console.log(user); // result as expected
}

// const phoneNo = 9876567891 
// for (const call of phoneNo) {
//   // console.log(call);//not iterable
// }

const map = new Map()
map.set('name','shubham')
map.set('college','TPS')
map.set('location','Bihar')
console.log(map);/**Map(3) {
  'name' => 'shubham',
  'college' => 'TPS',
  'location' => 'Bihar'
}*/

for(const key of map){
  console.log(key);/**[ 'name', 'shubham' ]
[ 'college', 'TPS' ]
[ 'location', 'Bihar' ] */
}

for (const [key,value] of map) {
  console.log(key, '=>', value);/**name => shubham
college => TPS
location => Bihar

   */
  
}

// object are not iteralbe with for of loop

const myObj = {
  name:"shubham",
  place:"Nalanda ,Bihar"
}
// for (const key of myObj) {
//   console.log(key);/** for (const key of myObj) {
//                   ^

// TypeError: myObj is not iterable*/
  
// }