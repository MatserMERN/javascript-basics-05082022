// private Methods
// var Module = (function(){
//     var privateMethod = function(){

//     }
//     var publicMethod = function(){

//     }
// })()

// console.log(Module)

// Understanding return

// var Module = (function(){
//     var privateMethod = function(){

//     }
//     return {
//         publicMethod: function(){
//             return "Public Method"
//         }
//     }
// })()

// console.log(Module.publicMethod())

// Anonymous Object Literal 
// var Module = (function(){
//     var privateMethod = function(){

//     }
//     return {
//         publicMethodOne: function(){

//         },
//         publicMethodTwo: function(){

//         },
//         publicMethodThree: function(){

//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object Literal
// var Module = (function(){
//     var obj = {}
//     var privateMethod = function(){

//     }
//     obj.someMethod = function(){

//     }
//     return obj
// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod: function(){

//         },
//         anotherMethod: function(){

//         }
//     }

//     return myObj
// })()

// console.log(Module)

// Revealing Module Pattern 
var Module = (function(){

    var privateMethod = function(){

    }

    var someMethod = function(){

    }

    var anotherMethod = function(){

    }

    return {
        someMethod:someMethod,
        anotherMethod: anotherMethod
    }
})()

console.log(Module)
// Accessing private Methods

// var Module = (function(){
//     var privateMethod = function(message){
//         console.log(message)
//     }
//     var publicMethod = function(text){
//         privateMethod(text)
//     }

//     return {
//         publicMethod: publicMethod
//     }
// })()

// Module.publicMethod("Calling private method")