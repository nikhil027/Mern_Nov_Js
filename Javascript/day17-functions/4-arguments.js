function add(n1, n2) {
    return n1 + n2
}

console.log(add(20, 10)) // -->30
console.log(add(20)) // -->NaN as it will be 20 + undefined
console.log(add(10, 20, 30)) // --> 30 - rejects 3rd argument