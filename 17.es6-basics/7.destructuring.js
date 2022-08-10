// Array Destructuring

let arr = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1) // arr[0]
console.log(name2) // arr[1]
console.log(name3) // arr[2]

// split()

let [fName, lName] = "Scott Desatnick".split(" ")

console.log(fName)
console.log(lName)

let [nameOne,,nameThree] = ["Scott", "Adam", "Tuan"]

console.log(nameOne)
//console.log(nameTwo)
console.log(nameThree)

const odd = [1,3,5]
const combined = [2,4,6, ...odd]

const [two, four, six, one, three, five] = combined

console.log(two)
console.log(four)
console.log(six)
console.log(one)
console.log(three)
console.log(five)

// Object Destructuring 

let user = {
    name: 'Scott',
    age: 46
}

let {name, age} = user

console.log(name)
console.log(age)

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)