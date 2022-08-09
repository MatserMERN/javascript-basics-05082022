// function Student(name, gender){
//     this.name = name
//     this.gender =gender
//     // this.age = 46
// }

// Student.prototype.age = 46

// var studentObj1 = new Student("Scott", "Male")
// console.log(studentObj1)
// console.log(studentObj1.age)

// var studentObj2 = new Student("Dagny", "Female")
// console.log(studentObj2)
// console.log(studentObj2.age)

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + " " + this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)
//console.log(person1.getFullName())

var person2 = new Person("Adam", "Colson")
console.log(person2)
//console.log(person2.getFullName())