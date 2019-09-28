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


// const messages = [
//     { name: 'hi', email: 'w@w.com', message: 'Hellooo' }
// ]
// // methods
// app.get()
// app.post()
// app.put()
// app.delete()

const contactRouter = require('./routes/contact')
app.use('/contact', contactRouter)


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.post('/contact', (req, res) => {
//     const message = {
//         name: req.body.name,
//         email: req.body.email,
//         massage: req.body.massage
//     }
//     messages.push(messages);
//     res.send(message)

// })


// PORT 
const port = process.env.PORT || 1234
app.listen(port, () => console.log(`Listening on port ${port} ....`));