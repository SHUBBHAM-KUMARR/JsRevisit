// here  we will discuss the non primitive datatypes arrays objects functions

// we make a house object with tenant and lord

const house = { paint: "green", rent: "Rs 5000" };
console.log(house.paint, house.rent);

const lord = house;
lord.paint = "red";
console.log(house.paint); // lord painted the house in red

const tenant = house;
tenant.paint = "peach";
console.log(house.paint); // tenant painted the house in peach so the final output is peach
tenant.rent = "Rs3000";
console.log(house.rent); //tenant bragained the rent

//  so here we can see that value assigned to an object is stored in memory location not in the object directly so when we update or assign new value we see it in final execution of code

// now we add property or keys/

house.saleValue = "Rs 10000000";
console.log(house); //key and value is added to the object

const avg0 = {
  name: "Tony stark",
  alterEgo: "Ironman",
  bio: "A nerd built some amazing tech that give him his big break!",
  freinds: ["Steve Rogers", "Parker", "Hogan"],
};

const avg1 = {
  name: "Peter Parker",
  alterEgo: "Spider Man",
  bio: "A college student bitten by spider.",
  freinds: ["Tony Stark", "Hogan", "MJ"],
};

// let get the value of arrays

console.log(avg0.freinds.push("shubham"));
console.log(avg1.freinds.push("shubham"));
console.log(avg0.freinds);
console.log(avg1.freinds);

// lets pop my name as i just code whole day so they told me for being our firends shubham you need to jump the buildings and i am not that action man so i just let be their audience

console.log(avg0.freinds.pop());
console.log(avg1.freinds.pop());
console.log(avg0.freinds);
console.log(avg1.freinds);
