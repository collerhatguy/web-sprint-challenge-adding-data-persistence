// build your `/api/projects` router here
const router = require("express").Router()
const { addProject, getProjects } = require("./model")

router.post("/", (req, res, next) => {
    addProject(req.body).then(project => 
        res.status(201).json(project)
    ).catch(next)
})

router.get("/", (req, res, next) => {
    getProjects().then(projects => 
        res.status(200).json(projects)    
    ).catch(next)
})

module.exports = router