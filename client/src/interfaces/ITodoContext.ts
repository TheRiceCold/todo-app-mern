import { AxiosResponse } from "axios";
import ITodo from "./ITodo";

export default interface ITodoContext {
  createTodo: (title: string, description: string) => Promise<AxiosResponse>;
  getTodos: (filter: string) => Promise<ITodo[]>;
  getTodoById: (id: Number) => Promise<ITodo>;
  updateTodo: (
    id: Number, 
    title: string, 
    description: string, 
    isCompleted: Boolean,
  ) => Promise<AxiosResponse>;
  deleteTodo: (id: Number) => Promise<AxiosResponse>;
};
