const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
name: String,
author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "authorModel"
},
genre: {
    type: mongoose.SchemaTypes.ObjectId,

    ref: "genreModel"
}

})

const bookModel = mongoose.model("bookModel", bookSchema)

module.exports = bookModel