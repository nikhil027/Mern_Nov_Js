// prop: fname, lname
// methods: greet
const axios = require('axios')
const key = 'pRPLCejozFwCHFbVCR'


function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.greet = function () {
        return `Hi ${this.firstName} ${this.lastName}`
    }
    this.gender = axios.get(`https://www.gender-api.com/get?name=${this.firstName}&key=$                             {key}`).then(function (response) {
        const user = response.data
        return user.name
    })

}

let person1 = new Person('sachin', 'tendulkar')
console.log(person1.greet(), person1.gender)