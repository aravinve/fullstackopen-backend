const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      'BODY Data: ', JSON.stringify(req.body),
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))


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

app.get('/api/persons/:id', (req, res) => {
    const paramId = Number(req.params.id)
    const targetPerson = persons.find(person => person.id === paramId)
    if(targetPerson){
        res.json(targetPerson)
    } else {
        res.status(404).json({message: `Person with ID: ${paramId} not found!`}).end()
    }
})

app.post('/api/persons', (req, res) => {
    const {name, number} = req.body
    if(name === undefined){
        res.status(400).json({message: `Name is required!`}).end()
        return
    }
    if(number === undefined){
        res.status(400).json({message: `Number is required!`}).end()
        return
    }
    if(validateName(name)){
        res.status(400).json({message: `${name} already exists in phonebook`}).end()
    } else {
        const newData = {name, number, id: Math.floor(Math.random() * 100)}
        persons = persons.concat(newData)
        res.status(201).json({message: `${name} added to phonebook successfully`}).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const paramId = Number(req.params.id)
    persons = persons.filter(person => person.id !== paramId)
    res.status(204).end()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})

const validateName = (newName) => {
    return persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length > 0
}