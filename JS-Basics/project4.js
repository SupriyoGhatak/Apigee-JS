// Take input from user there Name and create a Username by having a @ at the starting of the string and ending with the Lenght of the string of there Name.
//Example : Supriyo Ghatak  will be @Supriyo_Ghatak13 space will be modified to _

//let userName = prompt("Please Enter your Name");
let userName = "Prabir Ghatak"
let calculateLen = (userName.replace(" ", "")).length;
let finalUN = `@${userName}${calculateLen}`;
let Un = finalUN.replace(" ", "_");
console.log(Un);