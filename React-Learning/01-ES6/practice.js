const personsArray =[
{
name: "Aakash",
age: 25,
country: "India"
},
{
name: "Beena",
age: 52,
country: "India"
},
{
name: "Frank Turek",
age: 55,
country: "USA"
},
{
name: "Putin",
age: 55,
country: "Russia"
}
];

console.log(personsArray.findIndex(element => element.name === 'Putin'));
