// build your `Project` model here
const db = require('../../data/dbConfig')

const addProject = async project => {
    return db("projects")
        .insert(project)
        .then(([id]) => db("projects")
            .where({ project_id: id })
        )
} 

const getProjects = () => {
    return db("projects")
} 

module.exports = {
    addProject,
    getProjects
}