const router = require("express").Router();
const TodoModel = require("../models/todo");

module.exports = router
  .post("/api/todos", async(req, res) => {
    try {
      const newTodo = new TodoModel({ task: req.body.task });
      await newTodo.save();
      res.status(200).json("Todo task added successfully!");
    } catch (error) {
      res.json(error);
    }
  });
