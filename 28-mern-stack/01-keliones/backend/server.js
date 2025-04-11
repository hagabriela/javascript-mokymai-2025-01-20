const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())

// pasakom, kad į backendą gali kreiptis tik mūsų react'as, kuris sėdi ant tokio localhost
app.use(cors({ origin: 'http://localhost:5173' }))

// lokali DB
mongoose.connect('mongodb://127.0.0.1:27017/travels_db');

// prisijungė
const database = mongoose.connection 


// tikrinama, kaip sekėsi prisjungti
// on / once - kada išvedimas įvyksta

// jei įvyksta bet kuriuo momentu klaida - išveda klaidą
database.on('error', (err) => console.log(err));
// prisijungus sėkmingai - 1 kartą išvestų pranešimą
database.once('open', () => console.log('Successfully connected to DB'))

const travelSchema = new mongoose.Schema({
    title: { type: String, require: true },
    // description: { type: String },
    description: String,
    year: Number,
    nights: Number,
    price: Number
})

// kolekcijos "travels" pavadinimas - Travel
const Travel = mongoose.model('Travel', travelSchema)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/travels', async (req, res) => {
    // await - nes kreipinys į DB ir laukiama iš jos ats.
    // ieškome visoje kolekcijoje find(). Masyvas su visa info.
    const travels = await Travel.find()
    // Masyvą atiduodame
    return res.send(travels)
})

app.get('/travels/:id', async (req, res) => {
    const travel = await Travel.findById(req.params.id)
    // res.send({message: 'single travel', gautasId: req.params.id})
    return res.send(travel)
})

app.post('/travels', async (req, res) => {
    // new Travel({
    //     title: req.body.title,
    //     price: req.body.price,
    //     ...
    // })
    // paruošia dokumentą, kuris tiktų DB ir DB jį pripažintų.
    // sukuriamas dok.
    const newTravelData = new Travel(req.body)
    // const newTravelData = new Travel({
                // title: req.body.title,
                // price: req.body.price,
                // ...
    // })

    // įdėti sukurtą dok. į kolekciją
    // await galima rašyti, nes yra async
    // kaip per mongosh insertOne {title: ...  , price: ...}
    // Travel.insertOne() - galima būtų ir tokiu būdu
    const insertedDocument = await newTravelData.save()

    // nebūtinas - jei paskutinė arba vienintelė eilutė
    // išsiunčiami duomenys - ats, tam, kas klausia
    // res.status:
    // 200 - kreipėmes į backendą ir viskas ok (default prisikiria nenurodžius - bet geriau įsivertinti ir nurodyti)
    // 201 - sukuriame dok. ir viskas ok
    // for or for - ieško ir nerado duomenų
    return res.status(201).send(insertedDocument)
})

app.put('/travels/:id', async (req, res) => {
    // suranda įrašą, įdeda naują info. į tą įrašą ir atvaizduoja jau priskirtą naują įrašą
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true})
    // const travel = await Travel.findOne()

    // res.send({message: 'update travel'})
    return res.send(travel)
})

app.delete('/travels/:id', async (req, res) => {
    // užsisaugoti trinamo dok. info. - kad jei reikėtų galėtume atstatyti
    // const travel = await Travel.findByIdAndDelete(req.params.id)
    await Travel.findByIdAndDelete(req.params.id)
    // return res.send({ message: 'document was deleted'})

    res.send({message: 'document was deleted'})
    // return res.send({ message: 'deleted document' ,...travel})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})