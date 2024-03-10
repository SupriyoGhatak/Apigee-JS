let a = 5;
let b = "5";

console.log("a == b:", a==b); // this compares the Number only ==

console.log("Is a==b & Is the dataType also same: ", a === b); // this compares is the values are same and also if the dataType is also same or not.

if(a == b)
{
    console.log("Values are Same");
    if(a === b)
    {
        console.log("Everthing is Same");
    }else{
        console.log("DataTypes are not same.");
    }
}else{
    console.log("Values are Not Same");
}

