

const bookReviewModel = require("../bookModels/bookReviewModel")

module.exports = bookRevieController = {

postRevController: (req, res) => {
bookReviewModel.create({
    reviewText: req.body.reviewText,
    nameOf_theReviewAuthor: req.body.nameOf_theReviewAuthor,
    boolid: req.body.boolid

}).then(() => {
    res.json("Рецензия добавлена")
})
.catch(() => {
    res.json('Ошибка при добавление рецензи')
})

},


deleteRevController : (req, res) => {
bookReviewModel.findByIdAndRemove(req.params.id)
.then(() => {
    res.json("Рецензия удалена")
})
.catch(() => {
    res.json('Ошибка при удалени рецензии')
})

},

getRewController: (req, res) => {
bookReviewModel.find({boolid: req.params.id}).then((data) => {
    res.json(data)
})
.catch(() => {
    res.json('Ошибка при выводе')
        
})



}
















}