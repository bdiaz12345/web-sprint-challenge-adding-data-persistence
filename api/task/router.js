// build your `/api/tasks` router here
const express = require('express')

const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.post('/', (req, res) => {
    const taskData = req.body

    Tasks.add(taskData)
        .then(() => {
            res.status(201).json(taskData)
        })
        .catch(err => {
            res.status(500).json({message: `Error: ${err}`})
        })
})

module.exports = router