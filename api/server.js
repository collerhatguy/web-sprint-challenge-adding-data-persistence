// build your server here and require it from index.js
const express = require("express")
const cors = require("cors")

const taskEndpoints = require("./task/router")
const resourceEndpoints = require("./resource/router")
const projectEndpoints = require("./project/router")

const server = express()
server.use(express.json())
server.use(cors())
server.use("/api/tasks", taskEndpoints)
server.use("/api/projects", projectEndpoints)
server.use("/api/resources", resourceEndpoints)

server.use((err, req, res, next) => {
    const { status, message, stack } = err
    res.status(status || 500).json({
        message,
        stack
    })
})

module.exports = server