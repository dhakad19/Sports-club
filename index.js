const fs=require('fs')
const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded())

//pug
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))
app.get('/demo', (req, res) => {
  res.render('demo', { title: 'pubg', message: 'Hello there this is ashish' })
})
//end points

app.get('/', (req, res) => {
  const paran={}
 res.render('index.pug',paran);
})
app.get('/contact', (req, res) => {
  const paran={}
 res.render('contact.pug',paran);
})
app.get('/about', (req, res) => {
  const paran={}
 res.render('about.pug',paran);
})
   app.post('/', (req, res) => {
    Name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputtowrite=`The name of client is ${Name}, age ${age} gender ${gender} address ${address} `
    fs.writeFileSync('output.txt',outputtowrite)
    const paran={'message':'Form submitted succesfully'}
    res.render('index.pug',paran);
     })
  
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'public/about.html'));
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})