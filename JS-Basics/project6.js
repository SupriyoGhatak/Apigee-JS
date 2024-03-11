//create and Array with Companies Name:

let companies = ["Amazom", "Microsoft", "Capgemini", "TCS", "Wipro"]

console.log(companies);

companies.shift();
console.log(companies);

companies.splice(3,1, "Accenture")
console.log(companies);