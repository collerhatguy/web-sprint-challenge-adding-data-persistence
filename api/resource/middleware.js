

const verifyResource = (req, res, next) => {
    const { resource_name, resource_description } = req.body
    if (typeof resource_name !== "string") {
        next({ status: 404, message: "needs to be string" })
    }
    if (!resource_name.trim().length) {
        next({ status: 404, message: "cant be an empty string" })
    }
    if (resource_description && typeof resource_description !== "string") {
        next({ status: 404, message: "description must be string" })
    }
    next()
}
module.exports = { verifyResource }