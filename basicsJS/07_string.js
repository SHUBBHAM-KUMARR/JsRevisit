const name = "shubham"; //double quote most common and used
const name1 = "shubham"; //single quote
const name2 = `shubham`; //backticks
console.log(name);
console.log(name1);
console.log(name2);

// let we concatenate  the strings
const brand = "Mahindra";
const car = "Thar";
console.log(brand + car); // MahindraThar , there is no space
console.log(brand + " " + car); // Mahindra Thar ,  "space"
// we can use string interpolation to add some detail while executing out code.
console.log(
  `The global autmobile brand ${brand} ` +
    `is here with new and updated facelift of ${car}`
);

console.log(brand[0]); // M / we can use
console.log(brand.__proto__); //{}
console.log(brand.length); //8 total 8 letters are there
console.log(brand.charAt(7)); //a is at 7th index
console.log(brand.indexOf("d")); //d is at 5th index ;

// we can declare a string using new key word
const food = new String("Dosa idli sambhar chatni chatni");
console.log(food); //[String: 'Dosa idli sambhar chatni chatni']

// we can treim the spaces using trim(method)

let note = "       Javascript is a dynamically typed language           "; //we can see extra spaces here

console.log(note.trim()); //Javascript is a dynamically typed language
console.log(note.trimStart()); //Javascript is a dynamically typed language.............
console.log(note.trimEnd()); //       Javascript is a dynamically typed language

//we can use replace method to replace a value with another value
console.log(note.replace("Javascript", "JS")); //       JS is a dynamically typed language
