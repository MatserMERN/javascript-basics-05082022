var person = {} // Object Literal Syntax

// Creating Properties

// 1st Way
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"
person[cityName] = "Boston"

// 2nd way 
person.email = "scott@ef.com"
person.address = {}
person.address.country = "USA"

person.email ="scott.desatnick@ef.com"

// 3rd Way 
Object.defineProperty(person, "designation",{
    value: "Great Boss"
})

person.designation = "Sr.Director"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person[cityName])
console.log(person["city"])

console.log(person.firstName)
console.log(person.email)
console.log(person.address.country)

var student = {
    id: 1,
    name: "Scott",
    isAdmin: true,
    department: null,
    grade: undefined,
    getName: function(){
        return this.name
    },
    address: {
        city: "Boston",
        country: "USA"
    },
    subjects : ["Maths", "Physics", "Chemistry"]
}

student.age =46

console.log(student)
console.log(student.getName())