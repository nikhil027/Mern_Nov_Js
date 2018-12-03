a=[1,2,20,25]
b=[3,5,20,26]
c=[5,20,25]

console.log(commonInThree(a,b,c))

function commonInThree(a, b, c) {
    var resultArray = []
    var inputArray = a.concat(b,c)
    console.log(inputArray)
/*    
    var d = a.concat(b)
    console.log(d)
    var e = d.concat(c)
    console.log(e)
    var resultArray = []
    for(var i=0;i<e.length;i++){
        for(var j=0;j<e.length;j++){
            if(e[i]==e[j]){
                count++
            }
        }
    }
*/    
    
    return resultArray
}