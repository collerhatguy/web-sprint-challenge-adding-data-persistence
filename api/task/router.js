// build your `/api/tasks` router here
const router = require("express").Router()
const { verifyTask } = require("./middleware")
const { addTask, getTasks } = require("./model")

router.post("/", verifyTask, (req, res, next) => {
    addTask(req.body).then(task => 
        res.status(201).json(task)    
    ).catch(next)
})

router.get("/", (req, res, next) => {
    getTasks().then(tasks => 
        res.status(200).json(tasks)    
    ).catch(next)

})

module.exports = router