const express = require('express')

const mongoose = require('mongoose')

const app = express()

const port = 5000

app.use(express.json())

app.use(require('./bookRouts/genresRouter'))

app.use(require('./bookRouts/bookRouter'))

app.use(require('./bookRouts/authorRouter'))

app.use(require('./bookRouts/bookReviewRoutser'))

mongoose.connect('mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/Book?retryWrites=true&w=majority')
 .then(() => console.log("Успешное соеденение с сервером MongoDB"))
 .catch(() => console.log("Ошибка при запуске MongoDB"))



 app.listen(port, () => {
     console.log(`Сервер запушен Успешно  http://localhost:${port}`)
 })