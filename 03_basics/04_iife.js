// Immediately Invoked Function Expression (IIFE)


(function chai() {
    console.log(`DB CONNTECTED`);
})();   //Immediately Invoked Function Expression (IIFE) ko last me end karna hota hai to uske liye ";" ye lagana bhott important hai ";" is ke bina second code work nahi karrega

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("rupesh")