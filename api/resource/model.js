// build your `Resource` model here
const db = require('../../data/dbConfig')

const addResource = resource => {
    return db("resources")
        .insert(resource)
        .then(([resource_id]) => db("resources")
            .where({ resource_id })
            .first()
        )
}

const getResources = () => db("resources")

module.exports = {  
    addResource,
    getResources
}