// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks').where({ task_completed: false || true })
}

function add(task) {
    return db('tasks').where({ task_completed: false || true }).insert(task)
}