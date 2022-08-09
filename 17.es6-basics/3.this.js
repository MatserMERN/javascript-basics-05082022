// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// use settimeout
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// use 'self variable to fix the issue
// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self.id)
//         }, 2000)
//     }
// }

// employee.greet()

// bind methid to fix the issue
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this), 2000)
//     }
// }

// employee.greet()

var employee = {
    id:1,
    greet: function(){
        setTimeout(() =>{
            console.log(this.id)
        }, 2000)
    }
}

employee.greet()