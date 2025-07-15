// conditional operator : ==, ===, >,<,>=,<=  , !=,!==

// Using the isLoggedIn variable as an example, we can demonstrate how conditional statements control the flow of a program, allowing specific sections of code—such as login validation or access control—to execute only when certain conditions are met.


 // here if user gives the name it means he is logged any user can log it i know but for just expalining working of if statement 

const isLoggedIn =  true;
if(isLoggedIn==true){
  console.log("weclcome"); // welcome
  
}else{
console.log("  loggin first");//  loggin first if turned the false
}

// now let us set some parameters in afunction to set this isLoggedIn like in real app or website we do , not going to make whole system but using arrays and loops 

// we have two arrays that hold the userNames and passwords in identical index of two seperate arrays

const username = ["shubham009","rahul797","bheem_bahubali","kajal_theKillerCashew"];
const password = ["noOne@t0p","rahul@rahul","bheem!s100Bahu's","killed@100InBlink"];

// so we will ask user to enter username and password

const userInput = function(userInputname,inputPassword){
    let  isLoggedIn = false;
  for(let i = 0 ; i<username.length ; i++){
    if(userInputname===username[i] && inputPassword===password[i]){
      console.log(`welcome! ${userInputname} to our site`);
      isLoggedIn = true;
      break; //not continue ahead after condition met
    }
    if(!isLoggedIn){
      console.log("username or password is incorrect");
      break;//here we understand the importance of break
    }
  }
}

userInput("shubham009","noOne@t0p")//welcome! shubham009 to our site

// let check false value

userInput("noOne@top","shubham009")

//keep checking practise/ , i upload there what ever i practise {(:)

// though we used break before but  let us see switch conditional statementin javascript

// when we have multiple condition to be checked for same 
