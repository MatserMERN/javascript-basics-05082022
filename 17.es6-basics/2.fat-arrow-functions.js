// var add = function(x,y){
//     return x+y
// }

// var add = (x,y) => {
//     return x+y
// }

/*
    * Both are equal
    ? () => x+y
    ? () => {return x + y}
*/


//var add = (x,y) => {return x+y}

// var add = (x,y) => x+y

// console.log(add(10,20))

// // sort 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort()
// fruits.reverse()
// console.log(fruits)

// let numbers = [4,2,6]
// numbers.sort((a, b) => b-a)
// console.log(numbers)
/*
    * Both are equal
    ? (name) => name.length
    ?  name  => name.length
*/
let names = ["Scott", "Adam", "Tuan", "Uma"]
let lengths = names.map(name => name.length)
console.log(names)
console.log(lengths)

// With No parameters

let logDocument = () => console.log(window.document)
logDocument()

// line Break 
// let multiply = (x,y) 
// => x*y // Will give syntax error

let multiply = (x,y) =>  // This is valid syntax
x*y

// Object Literal 
// let setColor = function(color){
//     return {value : color}
// }

// let setColor = (color) =>{
//     return {value : color}
// }

let setColor = (color) => {
    return {value : color}
}

let backGroundColor = setColor("Green")
console.log(backGroundColor)