const {add, multiply} = require("./calculate"); // because of index.js, add & multiply will be here

const a=2;
const b=5;
console.log(`${a} + ${b} = ${add(a,b)}`);
console.log(`${a} x ${b} = ${multiply(a,b)}`);
