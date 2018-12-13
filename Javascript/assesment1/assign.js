a="Hello!"
console.log(a.split(''))
let temp=''
temp = a[0]
a[0] = a[1]
a[1] = temp
console.log(a,temp,a[0],a[1])
/*

function reverseVowels(a){
    let newStr = ''
    let vowelList = ['a','e','i','o','u','A','E','I','O','U']
    let i=0, j=a.length-1
    while (i < a.length){
        while(j >= 0){
            console.log(i,j,a[i],a[j],vowelList.includes(a[i]),a)
            if (!vowelList.includes(a[i])) {
                i++
            } else if(!vowelList.includes(a[j])){
                j--
            }
            let temp=''
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
            //     i++;
            //     j--;
            //     let temp=''
            //     temp = a[i]
            //     a[i] = a[j]
            //     a[j] = temp  
            //     console.log(i,j,a)  
            // }else{
            //     i++;
            //     j--;
            // } 
        }
    }
    return a
}

console.log(reverseVowels(a))

*/