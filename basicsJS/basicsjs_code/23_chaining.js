
// chaining refers to usage of multiple method on a object we use '.' to connect all of them

// simple string example

let name = "             shubham kumar            "
    .trim()
    .toUpperCase()
    .split()
    console.log(name);//[ 'SHUBHAM KUMAR' ] we get this value in console
 
    const arr =  [1,2,3,4,5,6,7,8,9,10]
    .map((num)=> num*10)//10 20 30 ..100
    .map((num)=> num-10)//0,10.20...90
    .filter((num)=>num>10)
console.log(arr);//[20, 30, 40, 50,60, 70, 80, 90]
