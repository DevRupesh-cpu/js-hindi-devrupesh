const user = {
    username: "Rupesh",
    price: 999,

    welcomeMesg: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMesg()
// user.username = "sam"
// user.welcomeMesg()

// console.log(this);

// function chai() {
//     console.log(this);
    
// }
// chai()


// const chai = function () {  *this is normal function
//     let username = "rupesh"
//     console.log(this.username);
// }

const chai =  () => {    // *this is arrow function
    let username = "rupesh"
    console.log(this.username);
}


// chai()

// const addTwo = (num1, num2) => {  *this is basic arrow function
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "rupesh"})


console.log(addTwo(3, 4));


// const myArry = [2, 5, 3, 7, 8]

// myArry.forEach()