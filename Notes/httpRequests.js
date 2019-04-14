
// Making and customizing http requests using darksky.net and mapbox api.

var request = require('request');

// Description: Finds weather for a given location. Parameters must be in lat-long pair
// const url = 'https://api.darksky.net/forecast/c4486dd98dca902b78d9c01a45554fab/35.9115,-79.0606'

// request({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.daily.data[0].summary + ' It is currently '+ response.body.currently.temperature + 
//             ' degrees out. There is a ' + response.body.currently.precipProbability + ' percent of rain' )
//     }  
// })


// Description: Finds lat-long pair for a given location (Address -> Lat/Long -> Weather)
// Geocoding - process of taking an address and converting that to a lat and long pair.
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Chapel%20Hill.json?access_token=pk.eyJ1IjoiZnBpbmVkZGEiLCJhIjoiY2p0ZGYwOWNwMTZtbTQ0bnVkcnhodW12OCJ9.sy9383XUfDIIkx0JTgvOXw&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to map services')
    }
    else if (response.body.features.length == 0){
        console.log('Unable to find location')
    }
    
    else {
        console.log('Chapel Hill\'s long: '+ response.body.features[0].center[0] + ', lat: '+ response.body.features[0].center[1])
    }

    
})

