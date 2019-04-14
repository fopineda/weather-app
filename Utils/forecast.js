var request = require('request');

// function
const forecast = (long, lat, callback) => {
    // Description: Finds weather for a given location. Parameters must be in lat-long pair
    const apiUrl = 'https://api.darksky.net/forecast/c4486dd98dca902b78d9c01a45554fab/'+ lat + ','+ long 
    request({url: apiUrl, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + 
            ' degrees out. There is a ' + body.currently.precipProbability + ' percent of rain')
        }  
    })

   
}

module.exports = forecast