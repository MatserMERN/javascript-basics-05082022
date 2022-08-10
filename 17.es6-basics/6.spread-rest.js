/*
    ? ... (spread operator) - unpacks the elements from an arrray
    ? ... (rest operator) - packs the elements in to an array
*/

/*
    ? Spread
*/

const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)

/*
    ? Rest
*/
function display(a,b,c, ...args){
    console.log(args)
}

display(1,2,3,4,5)

// constructing array literal

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// Concatinating arrays

let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// copying an array
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread operator on strings
let charsNew = ['A', ...'BCDE', 'F']
console.log(charsNew)

// Spread operator on Objects

var obj = {
    name: 'Scott',
    email: "scott@ef.com"
}

var obj1 = {...obj}

console.log(obj1)

var student = {
    name: "Scott",
    city: "Boston"
}

var student1 = {
    ...student,
    email: "Scott@ef.com",
    age: 46
}

console.log(student1)