// console.log(this)

// function sample() {
//     console.log(this)
// }

// sample()

// var obj = {
//     firstName: "Scott",
//     getFirstName: function () {
//         var myValue = this
//         console.log(myValue)
//         myValue.firstName = "Desatnick"
//         console.log(myValue)

//         var updateFirstName = function () {
//             myValue.firstName = "Great Boss"
//             console.log(myValue)
//         }

//         updateFirstName()
//     }
// }

// obj.getFirstName()


var obj = {
    firstName: "Scott",
    getFirstName: function () {
        console.log(this)
        this.firstName = "Desatnick"
        console.log(this)

        var updateFirstName = function () {
            this.firstName = "Great Boss"
            console.log(this)
        }.bind(this)

        updateFirstName()
        //updateFirstName.bind(this)()
        //updateFirstName.call(this)
        //updateFirstName.apply(this)
    }
}

obj.getFirstName()
