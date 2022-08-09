// Class
function Student(){

}

// Instance
function Person(){

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance

// Constructor

function Order(){
    console.log('Order is initiated')
}

var order1 = new Order() // Order() is a constructor

// Properties

function Customer(gender){
    this.gender = gender // this.gender is the property
}

var customer1 = new Customer("Female")
console.log(customer1)
