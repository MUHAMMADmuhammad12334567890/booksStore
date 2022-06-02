const bookModel = require("../bookModels/bookModel");

module.exports = bookController = {
  postController: (req, res) => {
    bookModel.create({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      })
      .then(() => {
        res.json("Книга добавлена");
      })
      .catch(() => {
        res.json("Ошибка при добавление")
      } );
  },

  deleteController: (req, res) => {
    bookModel.findByIdAndRemove(req.params.id).then(() => {
      res.json("Книга удалена");
    })
    .catch(() => {
      res.json("Ошибка при удаление")
    })
  },

  patchController: (req, res) => {
    bookModel.findByIdAndUpdate(req.params.id,
        {
          name: req.body.name,
          author: req.body.author,
          genre: req.body.genre,
        },
        { new: true }
      )
      .then(() => {
        res.json("Информация о книге изменена");
      })
      .catch(() => {
        res.json('Ошибка при изменение информации')
      })
  },

  getIdController: (req, res) => {
    bookModel.findById(req.params.id).then((data) => {
      res.json(data);
    })
    .catch(() =>{
      res.json("Ощибка при выводе ")
    })
  },

  getController: (req, res) => {
    bookModel.find().then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json("Ощибка привыводе")
    })
  },

  getGenresIdController: (req, res) => {
    bookModel.find({ genre: req.params.id }).then((data) => {
      res.json(data);
    }).catch(() => {
     res.json("Ошибка при выводе ")
    })
  },
};
