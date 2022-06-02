const mongoose = require('mongoose')

const authorSchema = {
    author_s_name: String,
    biography_of_the_author: String


}

const authorModel = mongoose.model("authorModel", authorSchema)

module.exports = authorModel