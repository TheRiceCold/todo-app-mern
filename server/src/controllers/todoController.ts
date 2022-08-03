import Todo from "../models/todo";
import { Request, Response } from "express";

const createTodo = async(req: Request, res: Response) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).send(todo);
  } catch(error: any) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getTodos = async(req: Request, res: Response) => {
  let filter = { };
  if (req.query.isCompleted)
    filter = { isCompleted: req.query.isCompleted === "true" };

  try {
    const todos = await Todo.find(filter);
    res.status(200).send(todos);
  } catch(error: any) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getTodoById = async(req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).send(todo);
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error);
  }
};

const updateTodo = async(req: Request, res: Response) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).send("task updated successfully!");
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error);
  }
};

const deleteTodo = async(req: Request, res: Response) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send("Todo has been deleted");
  } catch(error) {
    res.json(error);
  }
};

export {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
