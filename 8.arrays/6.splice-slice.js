/* * Splice **/
/*
    ? To add elements at specific position
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0, "Kiwi", "Lemon")
console.log(fruits)

/*
    ? To remove elements at specific position
*/
var fruitsOne = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsOne.splice(2,2)
console.log(fruitsOne)

/*
    ? To add and remove elements at specific position
*/
var fruitsTwo = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsTwo.splice(2,2,"Lemon")
console.log(fruitsTwo)

/* * Slice **/
var fruitsThree = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var sliceArray = fruitsThree.slice(1,3)
console.log(sliceArray)

 // Let me check and get back to you
var fruitsFour = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var sliceArrayOne = fruitsFour.slice(-3, -1)
console.log(sliceArrayOne)