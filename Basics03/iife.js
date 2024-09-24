//IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai() {
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED TWO  ${name}`);
})("successfully");
