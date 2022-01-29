// Loading myResume Database In The Server

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


// Importing Libaries 

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// importing Routes In The Server 

const indexRouter = require('./routes/index') // Index Route 

// Setting Up Engines 

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Setting Up Layouts

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


// Using Routes

app.use('/', indexRouter)

// Mongoose DataBase Connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected To Moongose Database Successfully"))

// Connecting & Listening to The Database

app.listen(process.env.PORT || 7000)


