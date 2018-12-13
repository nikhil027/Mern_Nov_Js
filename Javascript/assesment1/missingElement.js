arr = [1, 2, 3, 5]
//arr = [19,18,17,15]

function missingElement(a) {
    let actualSum = 0,
        expectedSum = 0
    let firstElement = a[0],
        lastElement = a[a.length-1]
    a.forEach(function(value){
        actualSum+=value
    })

    if(firstElement<lastElement){
        for(var i=0; i<(lastElement-firstElement)+1; i++){
            expectedSum += firstElement+i
        }
    } else {
        for(var i=0; i<(firstElement-lastElement)+1; i++){
            expectedSum += lastElement+i
        }
    }

    return expectedSum-actualSum
}

console.log(arr)
console.log(missingElement(arr))
