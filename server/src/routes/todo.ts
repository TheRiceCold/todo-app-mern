import { Router } from "express";
import TodoController from "../controllers/TodoController";

const controller = new TodoController();

export default Router()
  .post("/", controller.post)
  .get("/", controller.get)
  .get("/:id", controller.getById);

