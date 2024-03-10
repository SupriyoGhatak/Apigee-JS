//let --> variables can't be redeclared but can be updated. Block scope variable
//const --> variables can't be redeclared or updated. Block scope varaible.
//var --> varables can be redeclared and can be updated. Global scope varaible.

var fistName = "Supriyo";
var firstName = "Rohan";
// using var we have redeclared and updated the same vairable.
console.log(firstName);

let lastName = "Ghatak";

//let lastName = "Mukherjee" // this can't be done as LastName is already declrared

lastName = "Mukherjee" // we can update the variable no redeclare it.

console.log(lastName);

const fullName = "Supriyo Ghatak";

//fullName = "Rohan Mukherjee"; // as it is constant the variable can;t be change
console.log(fullName);