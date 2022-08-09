let message = "displaying \n" +
"message using ES5 \n" + 
"double quotes"

console.log(message)

let messageOne = `displaying 
message using ES6 
back tick`

console.log(messageOne)

console.log("name: %s, city: %s", "Scott", "Boston")
console.log("Id: %i, city: %s", 1, "Boston")

let firstName = "Scott", 
    lastname = "Desatnick"

let greeting = `Welcome to Mr. ${firstName} ${lastname}`
console.log(greeting)