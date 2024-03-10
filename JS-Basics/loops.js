let sum = 0;
for(let i =0; i<=5; i++)
{
    sum = sum + i;//sum += i;   
}
console.log("Value is", sum);

// If we want to iterate over an string or array 
// we use for of

let firstName = "Supriyo";
for (let i of firstName)
{
    if(i === "S")
    {
        console.log("you are lucky");
    }else{
        console.log(i);
    }
}

// If we want to use a for Loop over an Object or array we will use For in Loop
const instagram = {

    profileName: "Supriyo",
    profileFollowers: 1205,
    profileNoOfPost: 353,
    profileJobTitle: "Software Engineer",
    profileFollowings: 100
};

for (let i in instagram){

    console.log("Key :", i,"::", "Value:", instagram[i]);
}