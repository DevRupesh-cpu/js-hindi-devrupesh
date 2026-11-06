function sayMyName() {
    console.log("R");
    console.log("u");
    console.log("p");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName (this wont work we have to use () then this will work)
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2); 
// }

function addTwoNumber(number1, number2){
   
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}


const result = addTwoNumber(3, 5)
// console.log("result:", result);


function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rupesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Rupesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 2000]));
