// url - https://jsonplaceholder.typicode.com/users/1

const axios = require('axios')
var userId = process.argv[2]
const url = `https://jsonplaceholder.typicode.com/users/${userId}`

// axios.get(url) will return a PROMISE object

axios.get(url).then(function(response){
    const user = response.data
    //console.log(user)
    console.log('Listing Users')
    console.log(`${user.id}. ${user.name} - ${user.email}`)
}).catch(function(err){
    console.log(err.message)        // error handling
})


