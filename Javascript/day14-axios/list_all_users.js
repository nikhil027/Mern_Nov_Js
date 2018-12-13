// url - https://jsonplaceholder.typicode.com/users

const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

// axios.get(url) will return a PROMISE object

axios.get(url).then(function(response){
    const user = response.data
    //console.log(user)
    console.log('Listing Users')
    user.forEach(function(ind_user){
        console.log(`${ind_user.id}. ${ind_user.name} - ${ind_user.email}`)
    })
   
}).catch(function(err){
    console.log(err.message)        // error handling
})


