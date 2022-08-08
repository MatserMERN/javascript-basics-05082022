var todo = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

console.log(todo)

// Serialization
var student = {
    firstName: "Scott",
    lastName: "Desatnick"
}

var studentStringify = JSON.stringify(student)
console.log(studentStringify)

//deserialization
var studentParse = JSON.parse(studentStringify)
console.log(studentParse)