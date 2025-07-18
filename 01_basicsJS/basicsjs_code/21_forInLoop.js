// these loops can iterate object and other data type which are iterable

const myObj = {
  name: "shubham",
  userId: "shubh009@myObj",
  password: "shubham@009",
  cart: "empty",
};

for (const key in myObj) {
  console.log(key); // name ,password,userId,cart
}

for (const key in myObj) {
  console.log(`${key} is ${myObj[key]}`);/**name is shubham
userId is shubh009@myObj
password is shubham@009
cart is empty */
}

//let check whether its work with array or not

const arr = [1,2,3,4,5,6,7,8,9,0]
for (const key in arr) {
  console.log(key);//it got iterated but dont confuse it , it has returned keys starting from 0 towards 9th index which is key for this loop

}

for (const key in arr) {
  console.log(`${key} is key of ${arr[key]}`);// output 0 is key of 1
  
   }
