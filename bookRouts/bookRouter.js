const {Router} = require("express")

const bookController = require('../bookCounts/bookController')

const router = Router()

router.post('/books', bookController.postController)

router.delete('/books/:id', bookController.deleteController)

router.patch('/books/:id', bookController.patchController)

router.get('/books/:id', bookController.getIdController)

router.get('/books', bookController.getController)

router.get('/books/genres/:id', bookController.getGenresIdController)

module.exports = router