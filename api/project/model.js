// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects').where('project_completed', true || false || 0 || 1)
}

function add(project) {
    return db('projects').insert(project).where('project_completed', true || false || 0 || 1)
}