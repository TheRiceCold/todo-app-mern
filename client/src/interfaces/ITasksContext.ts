import { AxiosResponse } from "axios";
import ITask from "./ITask";

export default interface ITasksContext {
  createTask: (title: string, description: string) => Promise<AxiosResponse>;
  getTasks: (filter?: string) => Promise<ITask[]>;
  getTaskById: (id: Number) => Promise<ITask>;
  updateTask: (
    id: Number, 
    title: string, 
    description: string, 
    isCompleted: Boolean,
  ) => Promise<AxiosResponse>;
  deleteTask: (id: Number) => Promise<AxiosResponse>;
};
