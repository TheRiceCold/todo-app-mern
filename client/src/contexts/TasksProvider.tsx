import Axios from "axios";
import { useQueryClient } from "react-query";
import { 
  createContext,
  useContext,
  ReactNode,
  Context,
  FC,
} from "react";

import ITasksContext from "../interfaces/ITasksContext";
import ITask from "../interfaces/ITask";

const TasksContext = createContext({} as ITasksContext);
export const useTasks = () => useContext(TasksContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const TasksProvider: FC<IProps> = ({ children }) => {
  const baseURL = "https://todo-api-mern-exam.herokuapp.com/api";
  const axios = Axios.create({ baseURL });
  const queryClient = useQueryClient();

  const createTask = async(task: ITask) => await axios.post("todos", task);

  const getTasks = async({ queryKey }: any) => { 
    const [_, filter] = queryKey;
    let completed = filter === "completed" 
      ? "?isCompleted=true" 
        : filter === "active" ? "?isCompleted=false"
          : "" ;

    const { data } = await axios.get(`todos${completed}`);
    return data;
  };

  const getTaskById = async ({ queryKey }: any) => { 
    const [_, id] = queryKey;
    const { data } = await axios.get(`todos/${id}`);
    return data;
  };

  const updateTask = async(id: string, task: ITask) => 
    await axios.put(`todos/${id}`, task);

  const deleteTask = async (id: string) => 
    await axios.delete(`todos/${id}`);

  return (
    <TasksContext.Provider value={{
      createTask,
      getTasks,
      getTaskById,
      updateTask,
      deleteTask,
      queryClient,
    }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
