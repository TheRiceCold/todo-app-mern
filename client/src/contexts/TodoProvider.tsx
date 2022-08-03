import { AxiosResponse } from "axios";
import { 
  createContext,
  useContext,
  ReactNode,
  Context,
  FC,
} from "react";

interface ITodosContext {
  createTodo: ({ 
    title: string, 
    description: string 
  }) => Promise<AxiosResponse>,
  getTodos: () => Promise<ITodo[]>,
  getTodoById: (id: Number) => Promise<ITodo>,
  updateTodo: () => Promise<AxiosResponse>,
  deleteTodo: () => Promise<AxiosResponse>,
};

const TodosContext = createContext<ITodosContext>();

interface IProps {
  children: ReactNode | ReactNode[];
};

const TodosProvider: FC<IProps> = ({ children }) => {


  return (
    <TodosContext.Provider value={{
      createTodo,
      getTodos,
      getTodoById,
      updateTodo,
      deleteTodo,
    }}>

    </TodosContext.Provider>
  );
};

export default TodosProvider;
