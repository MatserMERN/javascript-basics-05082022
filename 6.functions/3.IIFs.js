(function greet() {
    console.log("Hello World")
})();

var sum = (function (x, y) {
    return x + y
})(20, 30)

console.log(sum)

var confirmation = (function confirm(){
    return "Here is your confirmation"
})()

console.log(confirmation)