require('dotenv').config()
const express = require('express')
const app = express();

// to accept JSON
app.use(express.json())


const mongoose = require('mongoose')
// mongoDB connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


const contactRouter = require('./routes/contact')
app.use('/contact', contactRouter)

// PORT 
const port = process.env.PORT || 1234
app.listen(port, () => console.log(`Listening on port ${port} ....`));