require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/twitter', (req, res)=>{
    res.send('Ayushdotcom')
})

app.get('/login', (req,res) =>{
  res.send('<h1>AAO BACKEND SEEKHTE HAIN</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h1>YOUTUBE SE SEEKHTE HAIN</h1>')
})

app.listen(process.env.PORT, ()=>{
  console.log(`Example app listening on port ${process.env.PORT}`)
} )