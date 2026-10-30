// premitive

//7 types : string, Number, boolean, null, undifined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTem = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 387985716768n



// Refference type (Non premitive)

// array, Objects, Function

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rupesh", 
    age : 22,
}

const myFunction = function() {
    console.log("Hello world");
}
const bigNumber = 123456789012345678901234567890n;
// console.log(typeof outsideTem);

// console.log(typeof bigNumber);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (all primitive type me ye use hoti hai) , heap memory(all non primitive type me ye use hoti hai)

let myYoutubeName = "Hiteshchaudhrydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
