const name = "Rupesh"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rupesh-hc-com')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-8, 4)

console.log(anotherString);

const newStringOne = "   Rupesh    "

console.log(newStringOne.trim())


const url = "https://hitesh.com/hitesh%20chaudhry"

console.log(url.replace('%20', '_'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));




