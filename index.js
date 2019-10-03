// require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
// to accept JSON
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Define Ports
const reactPort = 3000
const expressPort = 1234

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that will be set on Heroku
// app.use(cors())
app.use(cors({ origin: 'https://secure-ravine-85991.herokuapp.com' || `http://localhost:${reactPort}` }))


const mongoose = require('mongoose')
// mongoDB connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


const contactRouter = require('./routes/contact')
app.use('/contact', contactRouter)

// PORT 
const port = process.env.PORT || expressPort
app.listen(port, () => console.log(`Listening on port ${port} ....`));