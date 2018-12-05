let n1 = 10,
    n2 = 20

function add() {
    let n1 = 100,
        n2 = 200 // we are declaring new variables n1 and n2 and not modifying GS variables
    return n1 + n2
}

console.log(n1, n2)
console.log(add())
console.log(n1, n2)

