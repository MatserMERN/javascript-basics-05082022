// function sample(){
//     var foo = "blue"
//     console.log(foo)
// }

// sample()
// console.log(foo) // ReferenceError: foo is not defined

// function test(){
//     var foo = "Blue"
//     if(true) {
//         var bar = "yellow"
//     }

//     console.log(foo)
//     console.log(bar)
// }

// test()
/*
    ? var - function scoped
    ? let, const - block scoped
*/

// function display(){
//     if(true){
//         var foo = "Hello"
//         let bar ="How are you ?"
//         const baz = "I am fine"

//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }

//     console.log(foo)
//     //console.log(bar) //ReferenceError: bar is not defined
//     // console.log(baz) // ReferenceError: baz is not defined 
// }

// display()

// for(var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0;i<3;i++){
//     console.log(i)
// }
//console.log(i) //ReferenceError: i is not defined

function verify(){
    let foo =1
        foo =100
    //let foo =101 // Identifier 'foo' has already been declared
    console.log(foo)

    const bar =20
          //bar =30 // TypeError: Assignment to constant variable
    console.log(bar)
}

verify()

const names = ["Scott", "Adam", "Tuan"]
names.push("Uma")

console.log(names)