function Student(){
    console.log(this)
 this.firstName ="Scott"
 this.lastName = "Desatnick"
}

var student = new Student()

// student.firstName = "Scott"
// student.lastName = "Desatnick"
console.log(student)