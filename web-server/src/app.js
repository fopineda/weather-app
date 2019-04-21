const path = require('path')
const express = require('express')

const app = express()

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') 
app.set('views', viewsPath) // allows to set own "views" folder with different name

// Setup static directory to serve (html, css, images, js)
app.use(express.static(publicDirectoryPath))


// ------ Routes ---------
// callback function here is what to give back to the user
// req: information about the incoming request to the server
// res: bunch oif methods allowing us to customize what we are going to send back to the requester
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
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
        helpText: 'This is a helpful text.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Chapel Hill'
    }) // what is sent back to the requester
})


app.listen(3000, () => {
    console.log('Server has successfully started...')
})
