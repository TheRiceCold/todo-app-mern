const router = require("express").Router();
const todoModel = require("../models/todo");

module.exports = router
  .post("/api/todos", async(req, res) => {
    try {
      const newTodo = new todoModel({ task: req.body.task });
      await newTodo.save();
      res.status(200).json("Todo task added successfully!");
    } catch (error) {
      res.json(error);
    }
  })
  .get("/api/todos", async(req, res) => {
    try {
      const todos = await todoModel.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.json(error);
    }
  })
