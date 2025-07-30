// const user ={
//   username:"shubham kumar",
//   adress:{
//     city:"Nalanda",
//     state:"Bihar",
//     country:"India"
//   },
//   userDetails:()=>{
//    return "data fetched"
//   }
// }
// console.log(user.userDetails());
// console.log(user);
// this is hard coded objects we can make it dynamic so taking user as function
 function users(username,loginCount,isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
 return this
  
}
// without new
// const userOne =  users('shubham','77','true');
// const userTwo =  users('shreya','11','flase') //usertwo overwrites the values in userOne
// console.log(userOne);

// with new
const userThree =new  users('aman','33','true')
const userFour = new users ('rishav','11','false')
console.log(userThree);//users { username: 'aman', loginCount: '33', isLoggedIn: 'true' }
console.log(userFour);//users { username: 'rishav', loginCount: '11', isLoggedIn: 'false' }

//using new keywords give a new instance