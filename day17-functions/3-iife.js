// Immidiatly Invoked Function Expressions - IIFE
console.log('Before iife')

;(function(param){ // parameter in ()
    console.log('Im an iife '+ param)
}('Arg')) // invocation in () with arguments

let result = (function(name){
    return 'hello ' +  name
})('sunil')

console.log(result)

console.log(result)
