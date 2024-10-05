const sumModule = require("./sum.js");
const a=10;
const b=20;
console.log(`${a} + ${b} = ${sumModule.calculateSum(a,b)}`);

console.log(`Notes: \n 1) By default modules protects their varaible and function from leaking`);
console.log(`2) In order to give access to varaibles and function we have to exports using folling syntax`);
console.log(`3) module.exports = { placeYourVariables & function in this object}`);
console.log(`4) At recieving side Syntax is look like`);
console.log(`5) const moduleName = require("path_to_module")`);
console.log("6) const {props_name} = require('path_to_module')");
