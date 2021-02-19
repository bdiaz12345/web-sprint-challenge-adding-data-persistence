// build your `/api/projects` router here
const express = require('express')

const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.post('/', (req, res) => {
    const projectData = req.body

    Projects.add(projectData)
        .then(() => {
            res.status(201).json(projectData)
        })
        .catch(err => {
            res.status(500).json({message: `Error: ${err}`})
        })
})

module.exports = router