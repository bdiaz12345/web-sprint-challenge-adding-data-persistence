// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects').where('project_completed', true || false)
}

function add(project) {
    return db('projects').insert(project).where('project_completed', true || false)
}