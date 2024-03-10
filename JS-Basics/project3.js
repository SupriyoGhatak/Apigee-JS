// Print Even Numbers from 1 to 100 
for(let i =1; i<=100; i++){
    if(i%2==0)
    {
        console.log(i);
    }
}

// Ask user to enter any Number and still the user doesn't enter the correct Number it will go on asking
// let name = prompt("Please enter your Name");
// console.log("Name is :", name);

let gameSpecialNumber = 20;
let enteredNumber = prompt("Please Enter the Number");
while(gameSpecialNumber != enteredNumber)
{
   enteredNumber = prompt("Ooops Not Matched Try Again..")
}

console.log("Congratulation You Win!!!!!!!!!1");