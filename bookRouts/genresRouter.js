const {Router} = require('express')

const genreControllers = require('../bookCounts/genresControler')

const router = Router()

router.post('/genres', genreControllers.postGenres)

router.delete('/genres/:id', genreControllers.deleteGenres)

router.get('/genres', genreControllers.getGenres)

module.exports = router 