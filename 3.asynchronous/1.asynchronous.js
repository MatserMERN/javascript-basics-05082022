console.log('****** Synchronous*****')
console.log('one')
console.log('two')
console.log('three')

console.log('****** Asynchronous*****')
console.log('one')
setTimeout(function(){
    console.log('two')
}, 2000)
console.log('three')
