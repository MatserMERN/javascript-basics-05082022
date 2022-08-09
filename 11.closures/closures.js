function greet(message){
    var city ="Boston"
    return function(name){
        return message + " " + name + "Are you from " + city + "?"
    }
}

var sayHello = greet("Hello")
console.log(sayHello)

var wishMe = sayHello("Scott")

console.log(wishMe)
