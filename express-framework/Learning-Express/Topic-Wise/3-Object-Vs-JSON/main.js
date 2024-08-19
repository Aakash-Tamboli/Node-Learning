let object = {
    name: "Aakash",
    age : 26,
    isMarried: false
}

const jsonString = JSON.stringify(object) // it returns String version of Object i.e called JSON because its key always be String type and whole JSON always be String type.

console.log(jsonString); // JSON 
console.log(typeof(jsonString)) // string

object = null;
// let's make Object from JSON

object = JSON.parse(jsonString);

console.log(object); // object
console.log(typeof object); // object

/*
Conclusion: 
Whenever you heard JSON in js then assume it is a String which is written in object format where it keys are always in string form.
Whenever you heard Object in js then assume it is proper object where its keys are written as property(As you know class has props)

object
{
props: value
}

json
"{
"key": value
}"
*/