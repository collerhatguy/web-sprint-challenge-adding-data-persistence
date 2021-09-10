// build your `Task` model here
const db = require('../../data/dbConfig')

const addTask = task => {
    return db("tasks")
        .insert(task)
        .then(([task_id]) => 
            db("tasks")
                .where({ task_id })
                .first()
        )
}

const getTasks = () => {
    return db("tasks")
}

module.exports = {  
    addTask,
    getTasks
}