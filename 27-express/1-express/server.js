const express = require('express') // importuojam express bibiolteką - reikalaujam
const app = express()  // pakviečiam kitamąjį kaip f-ją. Per app žodelį, jei norėsim kažką daryti su express
const port = 3000 // localhost: 3000 // svarbu, kad front ir back end port'ai nesutaptų

// kad įeinančias užklausas priimtų json, 
// nes default tik atiduoda json
app.use(express.json()) 

// kiekvienas linkas turi būti kaip skirtinga f-ja
// get - gauti info. iš kažkokio API
// route / endpoint - reagavimas į juos
// req - įeinanti info.
// res - išeinanti info.

// app.get vykdomas(suveikia) tada, kai kreipiasi į http://localhost:3000/
// '/' - port = 3000
app.get('/', (req, res) => {
//   res.send({message: 'Labas, programavime!', date: new Date()})
  res.send({message: 'Labas, programavime!'})
})

// http://localhost:3000/about
// rašoma tik tai, kas yra po /
// /about
app.get('/about', (req, res) => {
    res.send({title: 'About us', content: 'We are the best!'})
})


// http://localhost:3000/contact
app.get('/contact', (req, res) => {
    let title = 'Contat us'
    let phone = '+370 600 0000'
    let email = 'info@web.com'
    res.send({ title, phone, email })
})

// REST API - vienam resursui visi šitie būna padaryti
// route: /posts
// GET: /posts
// GET: /posts/:id
// POST: /posts
// PATCH: /posts/:id    // atnaujinimas
// DELETE: /posts/:id

app.get('/posts', (req, res) => {
    res.send({message: 'All posts'})
})

app.get('/posts/:id', (req, res) => {
    // console.log(req.params); // terminale // [Object: null prototype] { id: 'ghfgbjhb' }
    res.send({message: `Post with id ${req.params.id}`})
})

app.post('/posts', (req, res) => {
    // console.log(req.body); // { title: 'new article', description: 'some description' } 
    // serveris priėmė kaip JS objektą
    // realiam gyvenime reikėtų patikrinti gautus duomenis
    res.send({message: 'Post created', dataReceived: req.body})
})


// įjungiam serverį
// pradeda klausyti, kas kreipiasi į šią lokaciją, šį localhost
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})