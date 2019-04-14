const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// prefixed with /api/todos
router.get("/", (req, res, next) => {
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  Todo.create(req.body)
    .then(todo => res.status(201).send(todo))
    .catch(err => next(err));
});

router.patch("/:id", (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});

module.exports = router;
