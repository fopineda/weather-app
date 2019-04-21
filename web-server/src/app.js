const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
// callback function here is what to give back to the user
// req: information about the incoming request to the server
// res: bunch oif methods allowing us to customize what we are going to send back to the requester
// Using wildcards: It's meant to catch any specific patterns (ex: '*' or 'help/*')
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
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

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Chapel Hill'
    }) // what is sent back to the requester
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        name: 'Felipe Pineda',
        errorMessage: 'Help article not found.'
    })
})


// for anything that isn't already set above
// It should be the last get because it should try to match with the pages above before it goes to this one. It's called middleware
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
