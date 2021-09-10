// build your `Task` model here
const db = require('../../data/dbConfig')

const addTask = task => {
    return db("tasks")
        .insert(task)
        .then(([task_id]) => 
            db("tasks")
                .where({ task_id })
                .first()
        ).then(t => ({
            ...t,
            task_completed: t.task_completed ? true : false
        }))
}

const getTasks = () => {
    return db("tasks")
    .leftJoin("projects as p", "p.project_id", "tasks.project_id")
    .then(tasks => 
        tasks.map(t => ({
            ...t,
            task_completed: t.task_completed ? true : false
        }))
    )
}

module.exports = {  
    addTask,
    getTasks
}