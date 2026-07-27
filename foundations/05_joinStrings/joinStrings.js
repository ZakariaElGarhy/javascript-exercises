
 // First name: Carlos
 // Last name: Stevenson
 // This year: 1965
 // Birth year: 1947

 // The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."


// Add your code right below, good luck!
let first_name = "carlos";
let last_name = "stevenson";
let this_year = 1965;
let birth_yea = 1947;

let full_name = `${first_name} ${last_name}`;
let age = 1965 - 1947
age = age.isString()
let greeting = `Hello! My name is ${Full_name} and I am ${age} years old.`


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
