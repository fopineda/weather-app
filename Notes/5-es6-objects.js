// Object property shorthand


const name = 'Felipe'
const userAge = 27


const user = {
    name: name,
    age: userAge,
    location: 'Chapel Hill'
}

console.log(user)


// object destructuring

const product = {
    label: 'World War Z',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock} = product
console.log(label)
console.log(stock)