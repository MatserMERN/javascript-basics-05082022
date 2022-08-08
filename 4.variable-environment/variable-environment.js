// function b(){
//     var x
// }

// function a(){
//     var x =2
//     b()
// }

// var x =1
// a()
// console.log(x)

// // x =2
// // x=1
// // x= undefined

function b(){
    var myVar;
    console.log(myVar)
}

function a(){
    var myVar = 2;
    console.log(myVar)
    b()
}

var myVar =1
console.log(myVar)
a()
console.log(myVar)

// 1
// 2
// 1

// 1
// 2
// undefined
// 1