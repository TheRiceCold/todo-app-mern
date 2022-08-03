import { Router } from "express";
import * as controller from "./controllers/todoController";

export default Router()
  .post("/", controller.createTodo)
  .get("/", controller.getTodos)
  .get("/:id", controller.getTodoById)
  .put("/:id", controller.updateTodo)
  .delete("/:id", controller.deleteTodo);

