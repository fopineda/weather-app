var request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZnBpbmVkZGEiLCJhIjoiY2p0ZGYwOWNwMTZtbTQ0bnVkcnhodW12OCJ9.sy9383XUfDIIkx0JTgvOXw&limit=1'
    request({url: url, json: true}, (error, response) => {
        // callback('string to pass to the other function', data || undefined)
        if (error){
            callback('Unable to connect to location services!', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another request.', undefined)
        }
        else{
            // Since you are going to be passing 'data' into the callback and the data being retrieved from the request is a lot, you can modify it
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
                
            })
        }
    })
}

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})