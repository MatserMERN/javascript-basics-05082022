/*
    ?  Function which is being passed as a parameter to another function 
    ?  is called callback function

*/

function display(value){
    console.log(value)
}

// display(1)
// display("Scott")
var test = function(){

}
display(test)

display(function(){

})