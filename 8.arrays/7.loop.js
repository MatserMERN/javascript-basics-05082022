var students = ["Scott", "Adam", "Tuan"]
console.log(students)
// for
console.log("*******For Loop******")
for(var i=0;i<students.length;i++){
    console.log(students[i], i)
}

// forEach
console.log("*******forEach Loop******")
students.forEach(function(value, index){
    console.log(value, index)
})

// map
console.log("*******map method******")
students.map(function(value, index){
    console.log(value, index)
})
console.log("*******forEach vs map******")

var studentsListOne = students.forEach(function(value, index){
    return value
})

var studentsListTwo = students.map(function(value, index){
    return value + '-' + index
})

console.log(studentsListOne)
console.log(studentsListTwo)

// for .. in
for(var index in students){
    console.log(index)
}

// for of 
for(var student of students){
    console.log(student)
}

for(var [index, value] of Object.entries(students)){
    console.log( value, index)
}