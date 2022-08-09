//  function getData(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Here is your async data")
//         }, 2000)
//     })
// }

// // getData().then(function(data){
// //     console.log(data)
// // })

//  async function printData(){
//     const output = await getData()
//     console.log(output)
// }

// printData()

// function printData() {
//   return new Promise(function(resolve, reject){
//         setTimeout(function(){
//            resolve('two')
//        }, 2000)
//   })
// }

// async function printNumbers(){
//     console.log('one')
//     console.log(await printData())
//     console.log('three')
// }

// printNumbers()

// async function getMessage(){
//     setTimeout(function(){
//         return "Hello"
//     }, 2000)
// }


// async function getNotification(){
//     var data = await getMessage()
//     console.log(data)
// }

// getNotification()

function getData() {
    var studentCount = 1
    return new Promise(function (resolve, reject) {
        if (studentCount > 1) {
            resolve("Here is your data")
        } else {
            reject("No data available")
        }
    })
}

async function getStudentData(){
    var output = await getData().catch(function(ex){return ex})
    console.log(output)
}

async function getStudentData(){
    try{
        await getData()
    }catch(ex){
        console.log(ex)
    }                  
}

getStudentData()