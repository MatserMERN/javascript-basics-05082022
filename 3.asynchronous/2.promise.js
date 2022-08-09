// function printData() {
//   return new Promise(function(resolve, reject){
//         setTimeout(function(){
//            resolve('two')
//        }, 2000)
//   })
// }

// console.log("one")
// printData().then(function(data){
//   console.log(data)
//   console.log('Three')
// })


function getData() {
    var studentCount =2
    return new Promise(function(resolve, reject){
          if(studentCount >1){
            resolve("Here is your data")
          } else {
           reject("No data available")
          }
    })
   }
   
   getData()
    .then(function(data){
     console.log(data)
     return data + ' : first then block'
   }).then(function(data){
     console.log(data)
   }).catch(function(ex){
    console.log(ex)
   })