const {Router} = require('express')

const authorController = require('../bookCounts/authorControler')

const router = Router()

router.post('/authors', authorController.postController)

router.delete('/authors/:id', authorController.deleteController)

router.get('/authors', authorController.getController)

router.patch('/authors/:id', authorController.patchControllers)

module.exports = router 