import Axios from "axios";
import { 
  createContext,
  useContext,
  ReactNode,
  Context,
  FC,
} from "react";

import ITodoContext from "../interfaces/ITodoContext";

const TodoContext = createContext({} as ITodoContext);
export const useTodo = () => useContext(TodoContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const TodoProvider: FC<IProps> = ({ children }) => {
  const baseURL = "http://localhost:8080/api/";
  const axios = Axios.create({ baseURL });

  const createTodo = async(title: string, description: string) => 
    await axios.post("todos", { title, description });

  const getTodos = async(filter: string) => { 
    const { data } = await axios.get(`todos?isCompleted=${filter}`);
    return data;
  };

  const getTodoById = async (id: Number) => { 
    const { data } = await axios.get(`todos/${id}`);
    return data;
  };

  const updateTodo = async (
    id: Number, 
    title: string, 
    description: string, 
    isCompleted: Boolean,
  ) => await axios.put(`todos/${id}`, { title, description, isCompleted });

  const deleteTodo = async (id: Number) => await axios.delete(`todos/${id}`);

  return (
    <TodoContext.Provider value={{
      createTodo,
      getTodos,
      getTodoById,
      updateTodo,
      deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
