// build your `Project` model here
const db = require('../../data/dbConfig')

const addProject = async project => {
    return db("projects")
        .insert(project)
        .then(([id]) => db("projects")
            .where({ project_id: id })
            .first()
        ).then(project => ({
            ...project,
            project_completed: project.project_completed ? true : false
        }))
} 

const getProjects = () => {
    return db("projects").then(projects => 
        projects.map(p => ({
            ...p,
            project_completed: p.project_completed ? true : false
        })))
} 

module.exports = {
    addProject,
    getProjects
}