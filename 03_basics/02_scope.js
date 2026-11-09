// var c = 300
let a = 300  // this is globle scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER = ", a); // this is block scope
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Rupesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Rupesh"
    if (username === "Rupesh") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++ Intersting ++++++++++++++++++++++++


console.log(addone(5)); // this i'll work 

function addone(num) {
    return num + 1 
}



addTwo(5)  // this wont work but upper wala will work
const addTwo = function(num) {
    return num + 2
}
