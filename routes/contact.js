const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

// Get 
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.json(contacts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Create
router.post('/', async (req, res) => {

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    try {
        const newContact = await contact.save()
        res.status(201).json(newContact)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

module.exports = router
