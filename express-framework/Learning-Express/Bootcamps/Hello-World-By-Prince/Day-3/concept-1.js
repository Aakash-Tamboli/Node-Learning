const jsonString = '{"name": "Aakash","age": 26,"gender": "M"}';

const object = JSON.parse(jsonString);

console.log("After converstion from json to object ");
console.log(object);


//-----------------------------------------------------------------------

const anotherJsonString = JSON.stringify(object);

console.log("After convertion from object to json");
console.log(anotherJsonString);
