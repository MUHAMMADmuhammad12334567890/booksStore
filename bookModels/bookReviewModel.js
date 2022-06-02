const mongoose = require('mongoose')

const reviewShema = mongoose.Schema({
    reviewText: String,
    nameOf_theReviewAuthor: String,
    boolid: {
        type: mongoose.SchemaTypes.ObjectId,

        ref: "bookModel"
    },




})

const bookReviewModel = mongoose.model("bookReviewModel", reviewShema)

module.exports = bookReviewModel