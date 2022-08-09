// var a = 10
// var b = a
//     a = 20
// console.log(a)
// console.log(b)
// // 20 10

// var a =[1,2]
// var b = a
// a.push(3)
// console.log(a)
// console.log(b)

// var a = [1,2]
// var b = a
// a = [1,2,3]
// console.log(a)
// console.log(b)

// var data = 1 +2 + "Scott" + 3 + 4
// console.log(data)

//12Scott34
//3Scott34
//

// var output = (function(x){
//     delete x
//     return x
// })(1)

// console.log(output)

// var output = (function(x){
//     delete x
//     return x
// })({a:1})

// console.log(output)

// var output = (function(x){
//     delete x.a
//     return x
// })({a:1})

// console.log(output)

// {}
// {a:1}
//

// How to empty an array
// var array = ['a', 'b', 'c', 'd', 'e', 'f']

// // Method1
// //array = []

// // Method2
// //array.splice(0, array.length)

// // Method3
// // while(array.length){
// //     array.pop()
// // }

// // Method4
// array.length =0

// console.log(array)

// // ternary operator 

// var a =11
// var message = a >10 ? "a is big number" : "a is small number"
// // if(a>10){
// //     message = "a is big number"
// // } else {
// //     message = "a is small number"
// // }
// console.log(message)

/*
   ?  ==  will check for only value
   ?  === will check for both value and type
*/

console.log(1==1)
console.log(1=='1')
console.log(1===1)
console.log(1==='1')

console.log(1!=1)
console.log(1!='1')
console.log(1!==1)
console.log(1!=='1')

// return statement 

function one(){
    return {
      value:1
    }
  }
  
  function two(){
    return 
    {
      value:1
    }
  }
  
  console.log(one())
  console.log(two())