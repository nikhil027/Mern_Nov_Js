const data = {
    "destination_addresses": ["Kundapura, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "418 km",
                        "value": 417561
                    },
                    "duration": {
                        "text": "8 hours 23 mins",
                        "value": 30155
                    },
                    "duration_in_traffic": {
                        "text": "8 hours 30 mins",
                        "value": 30603
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

// The distance between Bangalore and Kundapur is 418 kms and the time taken to travel is 8 hours 23 minutes

console.log(`The distance between ${data.origin_addresses[0].split(', ')[0]} and ${data.destination_addresses[0].split(', ')[0]} is ${data.rows[0].elements[0].distance.text} and the time taken to travel is  ${data.rows[0].elements[0].duration.text}`)