var request = require('request');
const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')


location = process.argv[2]
if (!location){
    console.log('Please provide a location')
} else {
    geocode(location, (error, {latitude, longitude, location}) => {
        // Description: Finds lat, long pair of the location given
        if (error) {
            return console.log(error)
        }
        forecast(longitude, latitude, (error, forecastData) => {
            // Description: Finds weather for a given location. Parameters must be in lat-long pair
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}





