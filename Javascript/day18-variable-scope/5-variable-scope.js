let n1 = 10,
    n2 = 20

function add(n1, n2) {
    let result = n1 + n2 // let keyword helps us define result as a local variable
    return result
}

console.log(add(n1, n2))
console.log(result) // There will be a ref error as the result is not available outside the function(FS)
