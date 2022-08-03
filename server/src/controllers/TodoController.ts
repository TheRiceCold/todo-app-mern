import BaseController from "./BaseController";
import Todo from "../models/todo";

class TodoController extends BaseController {
  constructor() {
    super(Todo);
  }
}

export default TodoController;
