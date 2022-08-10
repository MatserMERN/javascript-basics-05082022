class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getData(){
        return this.getFullName()
    }

    getMessage = () => {
        return "Welcome to the world of ES6 Classes"
    }
}

let stuObj1 = new Student("Scott", "Desatnick")
console.log(stuObj1)
console.log(stuObj1.getFullName())
console.log(stuObj1.getData())
console.log(stuObj1.getMessage())