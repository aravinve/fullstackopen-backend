const express = require('express')
const app = express()
const PORT = 3001

let persons = [
    {
        id: 1,
        name: 'John',
        number: '23424234'
    },
    {
        id: 2,
        name: 'Peter',
        number: '23137867'
    },
    {
        id: 3,
        name: 'Mary',
        number: '97685123'
    },
    {
        id: 4,
        name: 'Daniel',
        number: '56456123'
    }
]

app.get('/info', (req, res) => {
    res.send(`<h1>Phonebook Server Info</h1><div><p>Phonebook currently has ${persons.length} contacts </p></div><div><p>Current Server Time is ${new Date()} </p></div>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})