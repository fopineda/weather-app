var request = require('request');

// function
const geocode = (address, callback) => {
    const apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnBpbmVkZGEiLCJhIjoiY2p0ZGYwOWNwMTZtbTQ0bnVkcnhodW12OCJ9.sy9383XUfDIIkx0JTgvOXw&limit=1'
    request({url: apiUrl, json: true}, (error, {body}) => {
        // callback('string to pass to the other function', data || undefined)
        if (error){
            callback('Unable to connect to location services!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try another request.', undefined)
        }
        else{
            // Since you are going to be passing 'data' into the callback and the data being retrieved from the request is a lot, you can modify it
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                
            })
        }
    })
}

module.exports = geocode