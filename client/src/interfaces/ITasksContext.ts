import { AxiosResponse } from "axios";
import { QueryClient } from "react-query";
import ITask from "./ITask";

export default interface ITasksContext {
  queryClient: QueryClient;
  createTask: (task: ITask) => Promise<AxiosResponse>;
  getTasks: (query: any) => Promise<ITask[]>;
  getTaskById: (query: any) => Promise<ITask>;
  updateTask: (id: string, task: ITask) => Promise<AxiosResponse>;
  deleteTask: (id: string) => Promise<AxiosResponse>;
};
