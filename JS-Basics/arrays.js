// calculating the sum of arrays of marks of students

let arr = [98,76,88,91,70,65,99]
let len = arr.length;
let avg =0;
let sum =0;
for (let i in arr)
{
    sum += arr[i];
}
console.log("Total No of Student is :", len);
console.log("Sum is :", sum);

avg = sum/len;
console.log("Avg is :", avg );