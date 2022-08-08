/*
    ! function always returns a value
*/
function getValue(){
    // return 1
    // return "Scott"
    // return true
    // return undefined
    // return null
    // return function(){}
    // return {}
    // return []
    // return
}

//console.log(getValue())

// function getName(){
//     return "Scott" + " " + "Desatnick"
// }

// console.log(getName())
// console.log(getName())

function getName(firstName, lastName){
    return firstName + " " + lastName
}

// console.log(getName("Scott", "Desatnick"))
// console.log(getName("Adam", "Colson"))
// console.log(getName("Tuan", "Bui"))

// 
function getDetails(firstName, lastName, city){ 
    return "Welcome to" + " " + city + ", Mr." + firstName + " " + lastName
}

function getDetails(firstName, lastName){ 
    return "Welcome to" + ", Mr." + firstName + " " + lastName
}

function getDetails(firstName){ 
    return "Welcome to" + ", Mr." + firstName 
}

console.log(getDetails("Scott", "Desatnick", "Boston"))
console.log(getDetails("Adam", "Colson"))
console.log(getDetails("Tuan"))
console.log(getDetails())