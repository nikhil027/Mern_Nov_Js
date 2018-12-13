let n1 = 10,
    n2 = 20

function add(n1, n2) {
    result = n1 + n2 // not using let keyword will define result as a global variable
    return result
}

console.log(add(n1, n2))
console.log(result) // There will be no error as the result is available in GS
