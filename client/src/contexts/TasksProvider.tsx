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

const TasksContext = createContext({} as ITasksContext);
export const useTasks = () => useContext(TasksContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const TasksProvider: FC<IProps> = ({ children }) => {
  const baseURL = "http://localhost:8080/api/";
  const axios = Axios.create({ baseURL });
  const queryClient = useQueryClient();

  const createTask = async(title: string, description: string) => 
    await axios.post("todos", { title, description });

  const getTasks = async({ queryKey }) => { 
    const [_, filter] = queryKey;
    let completed = filter === "completed" 
      ? "?isCompleted=true" 
        : filter === "active" ? "?isCompleted=false"
          : "" ;

    const { data } = await axios.get(`todos${completed}`);
    return data;
  };

  const getTaskById = async (id: string) => { 
    const { data } = await axios.get(`todos/${id}`);
    return data;
  };

  const updateTask = async<string, ITask>(id, task) => await axios.put(`todos/${id}`, task);
  const deleteTask = async (id: string) => await axios.delete(`todos/${id}`);

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
