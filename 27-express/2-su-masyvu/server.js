const express = require('express')
const app = express()
const port = 3000

// svarbu, kad prieš route - šito svarbus eiliškumas
app.use(express.json()) 

// route dažn. sutampa su kolekcijos pav.

// darbuotojų info: id, vardas, pareigos
let darbuotojai = [
    { id: 1, vardas: 'John Smith', pareigos: 'Designer'},
    { id: 2, vardas: 'Peter Smith', pareigos: 'Programmer'},
]

// svarbus route eiliškumas - vykdo iš eilės

// GET http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET http://localhost:3000/darbuotojai
app.get('/darbuotojai', (req, res) => {
    res.send(darbuotojai)
})

// GET http://localhost:3000/darbuotojai/5
app.get('/darbuotojai/:id', (req, res) => {
    let darbuotojoId = req.params.id
    let darbuotojas = darbuotojai.find(x => x.id == darbuotojoId)
    // db.darbuotojai.find({id...}) // jei imtume duomenų bazėje
    res.send(darbuotojas)
})

// POST http://localhost:3000/darbuotojai
app.post('/darbuotojai', (req, res) => {
    let naujasDarbuotojas = req.body
    naujasDarbuotojas.id = Date.now()
    darbuotojai.push(naujasDarbuotojas)
    res.send(naujasDarbuotojas)
})

// DELETE http://localhost:3000/darbuotojai/:id
app.delete('/darbuotojai/:id', (req, res) => {
    let trinamasId = req.params.id
    darbuotojai = darbuotojai.filter(x => x.id != trinamasId)
    res.send({message: 'ok'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})