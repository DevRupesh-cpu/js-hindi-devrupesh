// singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rupesh",
    "full name": "rupesh rajput",
    [mySym]: "mykey1",
    age: 21,
    location: "delhi",
    email: "rupesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);

JsUser.email = "rupesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rupesh@gfb.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


