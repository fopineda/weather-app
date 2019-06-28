const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')

const app = express()

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') 
app.set('views', viewsPath) // sets path to views (html, handlebars)
hbs.registerPartials(partialsPath) // sets path to partials 

// Setup static directory to serve (html, css, images, js)
app.use(express.static(publicDirectoryPath))


// ------ Routes ---------
// Usually placed elsewhere but since it's a small application I can put them here
// callback function here is what to give back to the user
// req: information about the incoming request to the server
// res: bunch oif methods allowing us to customize what we are going to send back to the requester
// Using wildcards: It's meant to catch any specific patterns (ex: '*' or 'help/*')
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Felipe Pineda'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Felipe Pineda'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Felipe Pineda',
        helpText: 'This is a helpful text.'
    })
})

// API
app.get('/weather', (req, res) => {
    // query allows to grab item specified in URL
    if (!req.query.location) {  // No address provided
        return res.send({
            error: "No location provided, please provide one."
        })
    }
    geocode(req.query.location, (error, {latitude, longitude, location} = {}) => {
        // Description: Finds lat, long pair of the location given
        if (error) {
            return res.send({ error })
        }
        forecast(longitude, latitude, (error, forecastData) => {
            // Description: Finds weather for a given location. Parameters must be in lat-long pair
            if (error){
                return res.send({ error })
            }
            return res.send({
                forecast: forecastData,
                location: location
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

// Ex: /help/nothing, /help/lol
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        name: 'Felipe Pineda',
        errorMessage: 'Help article not found.'
    })
})

// for anything that isn't already set above
// It should be the last get because it should try to match with the pages above before it goes to this one. It's called middleware
// Throw error 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Felipe Pineda',
        errorMessage: 'Page not found.'
    })
})





app.listen(3000, () => {
    console.log('Server has successfully started...')
})
