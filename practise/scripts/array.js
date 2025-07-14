//in this practise we will make two arrays of firstname and lastname and we try to concate them using loops

// 1st try
const firstName = ["Tony","Steve","Peter","Natasha","Stephan"]
const lastName = ["Stark","Rogers","Parker","Romanoff","Strange"]

// using for loop
for(let i = 0;i<firstName.length;i++){
  for(let j=0; j<lastName.length;j++){
   if(i==j){
    console.log(`${firstName[i]} ${lastName[j]}`);
    
   }
  }
}
/**Tony Stark
Steve Rogers
Peter Parker
Natasha Romanoff
Stephan Strange */


//we can do that in less code 

for(let i= 0;i<firstName.length;i++){
  console.log(`${firstName[i]} ${lastName[i]}`); // this the same as we use in making our table
}/**
  Tony Stark
Steve Rogers
Peter Parker
Natasha Romanoff
Stephan Strange

 */
// try2 .... 