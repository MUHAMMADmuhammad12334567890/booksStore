const mongoose = require('mongoose')

const genreSchema = {
    genre_name:String,
    description_of_the_genre: String


}

const genreModel = mongoose.model("genreModel", genreSchema)

module.exports = genreModel