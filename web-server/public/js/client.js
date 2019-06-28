// Client side JavaScript, runs in the browser
// fetch the forecast information
// Makes the http request from inside client side JavaScript
// Fetch API: Browser based API
//      - Used in all modern browsers, but not in NodeJS. This means it cannot be made on the backed.




// Javascript representation of the form element, we can manipulate if needed.
const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()  // prevents the browser from refresh the page, which is the old way of doing forms. 
    const location = searchInput.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    // Fetches the forecast of the location provided by the search input
    fetch('/weather?location='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    
})