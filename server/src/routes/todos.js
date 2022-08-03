const router = require("express").Router();
const todoModel = require("../models/todo");

module.exports = router
  .post("/todos", async(req, res) => {
    try {
      const newTodo = new todoModel({ task: req.body.task });
      await newTodo.save();
      res.status(200).json("Todo task added successfully!");
    } catch (error) {
      res.json(error);
    }
  })
  .get("/todos", async(req, res) => {
    try {
      const todos = await todoModel.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.json(error);
    }
  })
  .put("/todos/:id", async(req, res) => {
    try {
      const updateTodo = await todoModel.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json("Task has been updated successfully!");
    } catch(error) {
      res.json(error);
    }
  })
  .delete("/todos/:id", async(req, res) => {
    try {
      const deleteTodo = await todoModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Task has been deleted");
    } catch (error) {
      res.json(error);
    }
  });
