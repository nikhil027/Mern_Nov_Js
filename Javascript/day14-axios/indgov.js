var axios = require('axios')

 url = 'https://api.data.gov.in/resource/8d308158-28aa-4bcf-9e98-948b029340ad?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10'

axios.get(url).then(function(response){
    const data = response.data
    //console.log(data.rec)
    var recordArray = data.records
    var totalBulbs = 0
    recordArray.forEach(function(record){
        totalBulbs += parseInt(record.ledbulbsdistributed)
    })
    //console.log('Listing statewise distribution of bulbs')
    console.log(data.title)
    console.log(`Total bulbs distributed upto ${recordArray[0].date} is : ${totalBulbs}`)
    console.log('Sl No |    State Name      | No of Bulbs | % share')
    
    for(var i=0;i<recordArray.length;i++){
        //console.log(`${i+1}. The number of bulbs distributed in ${recordArray[i].statename} is ${recordArray[i].ledbulbsdistributed} `)
        console.log(`${i+1} | ${recordArray[i].statename} | ${recordArray[i].ledbulbsdistributed} | ${(parseInt(recordArray[i].ledbulbsdistributed) / totalBulbs)*100} `)
    }
})