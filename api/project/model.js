// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects').where({ project_completed: false || true })
}

function add(project) {
    return db('projects').where({ project_completed: false || true }).insert(project)
}