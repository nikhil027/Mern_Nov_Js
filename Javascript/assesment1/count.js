str="The quick brown fox jumps over the lazy dog"
chr='the'

function count(s,c){
    let strArray=s.split(" ")
    return strArray.filter(word => word.toLowerCase() == c).length
    //console.log(strArray.filter(word => word.toLowerCase() == c).length)
    // strArray.forEach(function(value){
    //     if(value.toLowerCase()==c){
    //         count++
    //     }
    // })
    //return count
}

console.log(count(str,chr))