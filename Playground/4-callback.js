// // Playground for callbacks!

// // Lines 5,6, and 7 are the callback function. A callback function is a function that we provide as an arguement to another function.
// setTimeout(
//     () => {
//     console.log('Two seconds are up')
// }
// , 2000)


// // Not all callback are async
// // Filter takes in a callback and is sync
// const names  = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// // Description
// // Params:
// //      address: address that will be turned into lat-long pair
// //      callback: function that will be called once we have the data
// // Notes:
// //      two manners of giving the coordinates to the user. 1. Return it to the user in the return statement, no callback (sync). 2. Give to the callback
// //      If you want async, you will want to do #2 with callbacks
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitdue: 0,
//             longitude: 0
//         }

//         callback(data) // same as calling second parameter in geocode (function with (data) )
//     }, 2000)
// }

// geocode('Chapel Hill', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    var sum = 0
    setTimeout(() => {
        sum = x + y
        callback(sum)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})