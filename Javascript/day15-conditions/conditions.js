function fbLikes(likes){
    let text
    if(likes.length == 0) {
        text = 'no one likes this'
    } else if(likes.length == 1) {
        text = `${likes[0]} likes this`
    } else if(likes.length == 2) {
        text = `${likes[0]} and ${likes[1]} likes this`
    } else if(likes.length == 3) {
        text = `${likes[0]}, ${likes[1]} and ${likes[2]} likes this `
    } else {
        text = `${likes[0]}, ${likes[1]} and ${likes.length -2} others like this`
    }
    
    return text
}

console.log(fbLikes([]))
console.log(fbLikes(['Suri']))
console.log(fbLikes(['Suri','Kaddi']))
console.log(fbLikes(['Suri','Kaddi','Mahe']))
console.log(fbLikes(['Suri','Kaddi','Mahe','Iddu']))