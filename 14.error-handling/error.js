// try {
//     // code that may or may not throws error
// }
// catch {
//     // code to be executed if an error occurs
// }
// finally {
//     // code to be executed regardless of an error occurs or not
// }

// try {
//     console.log('This is try block')
//     var output = getMessage()
// }
// catch (ex) {
//    console.log('this is catch block')
//    console.log(ex)
//    console.log(ex.name)
//    console.log(ex.message)
// }
// finally {
//     console.log('this is finally block')
// }


// try {
//     eval("alert('Hello'")
// } catch(ex) {
//     console.log(ex.name)
//     console.log(ex.message)
// }

// try {
//     throw "Error Occured"
// } catch(ex){
//     console.log(ex)
// }

try {
    var studentCount = 2
    if(studentCount >1){
        throw {
            studentId : 101,
            message: "Duplicate records found with this id"
        }
    }
} catch(ex){
    console.log(ex)
}