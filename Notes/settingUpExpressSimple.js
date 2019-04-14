const path = require('path')
const express = require('express')
const geocode = require('../../Utils/geocode')
const forecast = require('../../Utils/forecast')

const app = express()
app.use(express.static(path.join(__dirname, '../public'))) // Express to serve up the public directory and all of its files

// callback function here is what to give back to the user
// req: information about the incoming request to the server
// res: bunch oif methods allowing us to customize what we are going to send back to the requester
app.get('', (req, res) => {
    res.send('<b>Hello express!</b>') // what is sent back to the requester
})

app.get('/help', (req, res) => {
    res.send({name: 'Felipe', Age: 23}) // what is sent back to the requester
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>') // what is sent back to the requester
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
