// Loading MongoDb Database In The Server from our .env file

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// Importing Libaries 

const mongoose = require('mongoose')
const express = require('express')
const ejs = require('ejs')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Importing Routes In The Server 

const indexRouter = require('./routes/index') // Index Route 

// Setting Up Engines 

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Setting Up Layouts

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')) // Why Does The JS Not Work?


// Using Routes

app.use('/', indexRouter)

// MongoDB Atlas Connection

const URI = process.env.DATABASE_URL;

const connectDB = async () => {
    await mongoose.connect(URI , { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected To MongoDb Atlas')
}
connectDB()

// Connecting & Listening to The Database

app.listen(process.env.PORT || 7000)


