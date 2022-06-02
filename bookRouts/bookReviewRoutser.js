const {Router} = require("express")

const bookRevieController = require('../bookCounts/bookReviewControler')

const router = Router()

router.post('/reviews', bookRevieController.postRevController)

router.delete('/reviews/:id', bookRevieController.deleteRevController)

router.get('/reviews/books/:id', bookRevieController.getRewController)

module.exports = router
