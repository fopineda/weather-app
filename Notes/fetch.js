// Client side JavaScript, runs in the browser
// fetch the forecast information
// Makes the http request from inside client side JavaScript
// Fetch API: Browser based API
//      - Used in all modern browsers, but not in NodeJS. This means it cannot be made on the backed.

// glimpse of promises
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})


fetch('http://localhost:3000/weather?location=Chapel%20Hill').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})