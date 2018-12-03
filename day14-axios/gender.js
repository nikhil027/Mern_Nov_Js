/* -- Ruby Code --
require 'httparty'
key = "pRPLCejozFwCHFbVCR"
puts "Enter your first name"
name = gets.chomp
response = HTTParty.get("https://www.gender-api.com/get?name=#{name}&key=#{key}")
gender = response.parsed_response["gender"]
puts "The Gender of #{name} is #{gender}"
*/

// url - https://www.gender-api.com/get?name=#{name}&key=#{key}

const axios = require('axios')
const key = 'pRPLCejozFwCHFbVCR'
const name = process.argv[2]
const url = `https://www.gender-api.com/get?name=${name}&key=${key}`

// axios.get(url) will return a PROMISE object

axios.get(url).then(function(response){
    const user = response.data
    console.log(`${user.name} is ${user.gender}`)
}).catch(function(err){
    console.log(err.message)        // error handling
})


