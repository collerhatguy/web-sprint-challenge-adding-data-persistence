// build your `/api/resources` router here
const router = require("express").Router()
const { verifyResource } = require("./middleware")
const { getResources, addResource } = require("./model")

router.post("/", verifyResource, (req, res, next) => {
    addResource(req.body).then(resource => 
        res.status(201).json(resource)    
    ).catch(next)
})

router.get("/", (req, res, next) => {
    getResources().then(resources => 
        res.status(200).json(resources)
    ).catch(next)
})

module.exports = router
