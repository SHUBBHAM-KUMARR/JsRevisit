//
function callstack0(){
  console.log("inside 0");
  callstack1()
}
function callstack1(){
  console.log("inside 1");
  callstack2()
}
function callstack2() {
  console.log("inside 2");
  // callstack0()//here callstack 0 function is not initialised as it creates a infinity and breaks the range
}
callstack0();//inside0 inside1 inside2
// callstack1();// inside 1 inside 2
// callstack2();//inside2