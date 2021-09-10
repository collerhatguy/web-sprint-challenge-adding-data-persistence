
const validateProject = (req, res, next) => {
    const { project_name } = req.body
    if (typeof project_name !== "string") {
        next({ status: 400, message: "that isnt a string" }) 
    }
    if (!project_name.trim().length) {
        next({ status: 400, message: "cannt be an empty string"})
    }
    next()
}

module.exports = {
    validateProject
}
