

const verifyTask = (req, res, next) => {
    const { task_description,  project_id } = req.body
    if (typeof task_description !== "string") {
        next({ status: 400, message: "thats not a string" })
    }
    if (!task_description.trim().length) {
        next({ status: 400, message: "not an empty string" })
    }
    if (!project_id) {
        next({ status: 400, message: "project_id is mandatory" })
    }
    if (typeof project_id !== "number") {
        next({ status: 400, message: "project_id is a number" })
    }
    next()
} 
module.exports = { verifyTask }