arr = [1, 2, 3, 5]
//arr = [19,18,17,15]

function missingElement(a) {
    for (var i = 0; i < a.length - 1; i++) {
        console.log(Math.abs(a[i] - a[i+1]))
        if (Math.abs(a[i] - a[i+1]) == 2){
            return (a[i]+a[i+1])/2
        }
    }
}

console.log(arr)
console.log(missingElement(arr))