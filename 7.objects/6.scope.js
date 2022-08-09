// var person = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// person.email = "scott@ef.com" // CREATE
// person.firstName ="Great Scott" // UPDATE
// delete person.age // DELETE
// console.log(person) // READ

// /*
//     ? Object.prvenetExtensions()
//     ? We can update and delete existing properties
//     ? We can't add new property
// */
// var studentPreventExtensions = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// Object.preventExtensions(studentPreventExtensions)
// studentPreventExtensions.email = "scott@ef.com"
// studentPreventExtensions.firstName ="Great Scott"
// delete studentPreventExtensions.age
// console.log(studentPreventExtensions)


/*
    ? Object.seal()
    ? We can't delete existing properties
    ? We can't add new property
    ? We can update the existing property
*/
// var studentSeal = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// Object.seal(studentSeal)
// studentSeal.email = "scott@ef.com"
// studentSeal.firstName ="Great Scott"
// delete studentSeal.age
// console.log(studentSeal)

/*
    ? Object.freeze()
    ? We can't delete existing properties
    ? We can't add new property
    ? We can't update the existing property
*/
var studentFreeze = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 46,
    address: {
        country: "USA"
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email = "scott@ef.com"
studentFreeze.firstName ="Great Scott"
studentFreeze.address.country ="India"
delete studentFreeze.age
console.log(studentFreeze)


var studentStringify = JSON.stringify(studentFreeze)
console.log(studentStringify)
var studentParse = JSON.parse(studentStringify)
console.log(studentParse)


studentParse.email = "scott@ef.com" // CREATE
studentParse.firstName ="Great Scott" // UPDATE
delete studentParse.age // DELETE
console.log(studentParse) // READ

console.log(studentParse)