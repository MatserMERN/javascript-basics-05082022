 
// function say(message){
//     console.log(message)
// }

// say() 

//ES5 way

// function say(message){
//     message = typeof message !== 'undefined' ? message: "Hi"
//     console.log(message)
// }

// say("Hello")
// say()

// ES6 way
function say(message ="Hi"){
    console.log(message)
}

say("Hello")
say()
