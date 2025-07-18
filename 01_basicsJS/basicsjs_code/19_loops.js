// Loops are used in programming to execute a block of code repeatedly, either a fixed number of times or until a specific condition is met.
// JavaScript provides three main types of loops: for, while, and do...while.

//let say we want a natural numbers upto 100 w

for(let i = 1;i<=100;i++){
  console.log(i);//we get 1,2,3,4,5,6,7,8,9....100
  
}




// let say we want to print even numbers between 1 to 100 we will have to use condions

for(let i = 0; i <= 100 ; i++){
  if(i%2 == 0){
    console.log(i);//we got 2 ,4,6,8,10,12,14,16....98,100
    
  }
}

// let we want to print mutiplication table

  for(let i =1 ; i<=10 ;i++){
    for (let j = 1; j <=10; j++){
     console.log(`${i} * ${j} = ${i*j}`);
      
    }
    console.log("______________");//we get the table 
    
  }

  // and we have used loops in conditions to test whether the user is logged or not

//   / we have two arrays that hold the userNames and passwords in identical index of two seperate arrays

// const username = ["shubham009","rahul797","bheem_bahubali","kajal_theKillerCashew"];
// const password = ["noOne@t0p","rahul@rahul","bheem!s100Bahu's","killed@100InBlink"];

// so we will ask user to enter username and password

// const userInput = function(userInputname,inputPassword){
//     let  isLoggedIn = false;
//   for(let i = 0 ; i<username.length ; i++){
//     if(userInputname===username[i] && inputPassword===password[i]){
//       console.log(`welcome! ${userInputname} to our site`);
//       isLoggedIn = true;
//       break; //not continue ahead after condition met
//     }
//     if(!isLoggedIn){
//       console.log("username or password is incorrect");
//       break;//here we understand the importance of break
//     }
//   }
// }

// userInput("shubham009","noOne@t0p")//welcome! shubham009 to our site

// // let check false value

// userInput("noOne@top","shubham009")

// while loop
let i = 0;
while (i<=10) {
  console.log(i);
  i++
}

// printing table

let a = 1
while (a<=10) {
  let b = 1
  while(b<=10){
    console.log(`${a} * ${b} = ${a*b}`);
    b++
  }
  console.log('________');
  
  a++
}


// do while

//let we count numbers upto ten

let count = 1;

do {
  console.log("Count is:", count);
  count++;
} while (count <= 10);



