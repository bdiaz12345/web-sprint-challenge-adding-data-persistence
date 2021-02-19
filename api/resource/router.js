// build your `/api/resources` router here
const express = require('express')

const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body

    Resources.add(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({message: `Error: ${err}`})
        })
})

module.exports = router