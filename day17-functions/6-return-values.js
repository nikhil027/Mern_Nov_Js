function numbers() {
    let n1 = 10,
        n2 = 20,
        n3 = 30
    return n1, n2, n3 // it returns only the last var n3 as return stmt can return only one object
}

console.log(numbers())

function getNumbers() {
    let n1 = 10,
        n2 = 20,
        n3 = 30
    // return [n1, n2, n3]  // multiple values can be returned by adding them to an array or object
    //return {n1:n1,n2:n2,n3:n3} // older style of returning an object
    return {
        n1,
        n2,
        n3
    } // es6 method of consise object properties
}

const result = getNumbers()
// For Objects
// const a1 = result.n1,
//     a2 = result.n2,
//     a3 = result.n3

const {n1, n2, n3} = result // object destructuring in es6 opposite to consise properties 

// For Arrays
// const a1 = result[0],
//     a2 = result[1],
//     a3 = result[2]

console.log(n1, n2, n3)

//console.log(a1, a2, a3)