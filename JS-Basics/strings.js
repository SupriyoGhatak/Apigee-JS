//Basics of Strings
// String are immutable in JS

let str = "Supriyo Ghatak";
console.log(str);

//calculating the length of the string

console.log(str.length);

//String literals
// this is a special way of declaring strings. It is used to do string interpollation.

let str2 = `This is the way of writing the string literals`

console.log(str2);

// Now lets try the advantage of string literals.

let obj = {
    name: "Pen",
    price: 10
}

let output = `The price of the item ${obj.name} is Rupees ${obj.price}`
//${expression} this adding of expression inbetween string is known as string interpollation.

console.log(output);
// treating special characters 

console.log("Supriyo\nGhatak"); // Note:- if we calculate the lenght of the string it will take only a extra character for that \n instead of 2 characters.


let collage = "HITK";

console.log(collage.toUpperCase());
console.log(collage.toLocaleLowerCase());


// Strings special function or methods
/*
    str.length,
    str.toUpperCase(),
    str.toLowerCase(),
    str.trim(),
    str.slice(start,end?),
    str.concat(str2),
    str.replcae(oldVal, newVal),
    str.charAt(index)
*/
