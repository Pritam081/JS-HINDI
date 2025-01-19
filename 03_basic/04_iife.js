// Immediately Invooked Function Expressions (IIFE)
// Add semi colon , it's required
(function chai(){
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log("DB CONNECTED TWO")
})();
( (name) => {
    console.log(`DB CONNECTED ${name}`)
})('pritam');
