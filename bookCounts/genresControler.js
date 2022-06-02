const genreModel = require("../bookModels/genresModel")


module.exports = genreControllers = {


postGenres: (req, res ) => {
genreModel.create({
    genre_name: req.body.genre_name,
    description_of_the_genre: req.body.description_of_the_genre

})
.then(() => {
res.json("Жанр добавлен")
})


}, 


deleteGenres: (req, res) => {
genreModel.findByIdAndRemove(req.params.id).then(() => {
    res.json("Жанр удален")
})



},


getGenres: (req, res) => {
genreModel.find().then((data) => {
    res.json(data)
})


},






}