/*
    * concat method
*/
var fruits = ["Orange", "Apple", "Banana", "Mango"]
var vegetables = ["Potato", "Tomato", "Brinjal", "Guava"]

var getAllItems1 = fruits.concat(vegetables)
console.log(getAllItems1)

var getAllItems2 = vegetables.concat(fruits)
console.log(getAllItems2)

/*
    * split method - converts string in to an arrau
*/

var names = "Scott Desatnick".split(" ")
console.log(names)

/*
    * join method - converts array in to a string
*/

var movies = ["Avatar", "Good Will Hunting", "The Shawshank Redemption", "The Martian"]

var movieString = movies.join(",")

console.log(movieString)