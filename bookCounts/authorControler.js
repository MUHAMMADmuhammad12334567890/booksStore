const authorModel = require("../bookModels/authorModel");

module.exports = authorController = {
  postController: (req, res) => {
    authorModel
      .create({
        author_s_name: req.body.author_s_name,
        biography_of_the_author: req.body.biography_of_the_author,
      })
      .then(() => {
        res.json("Автор добавлен");
      })
      .catch({ error: "Ошибка при добавление автора " });
  },

  deleteController: (req, res) => {
    authorModel
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Автор удален");
      })
      .catch({ error: "Ошибка при Удалени автора " });
  },

  getController: (req, res) => {
    authorModel
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch({ error: "Ошибка привыводе автора" });
  },

  patchControllers: (req, res) => {
    authorModel
      .findByIdAndUpdate(
        req.params.id,
        {
          author_s_name: req.body.author_s_name,
          biography_of_the_author: req.body.biography_of_the_author,
        },
        { new: true }
      )
      .then(() => {
        res.json("Данные автора изменены");
      })
      .catch("ошибка при изменение данных автора");
  },
};
