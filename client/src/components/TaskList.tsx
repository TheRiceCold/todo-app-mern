import { SetStateAction, Dispatch, FC } from "react";
import { useTasks } from "../contexts/TasksProvider";

import ITask from "../interfaces/ITask";
import TaskItem from "./TaskItem";

interface IProps {
  tasks: ITask[];
  loadingTasks: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  setOpenDeleteAlert: Dispatch<SetStateAction<boolean>>;
};

const TaskList: FC<IProps> = ({ 
  tasks,
  loadingTasks,
  setOpenEditModal,
  setOpenDeleteAlert,
}) => (
  <main style={{ overflow: "auto", maxHeight: "60vh" }}>
    {!loadingTasks && tasks.map((task: ITask) => (
      <TaskItem 
        id={100}
        key={task._id}
        title={task.title} 
        isCompleted={task.isCompleted}
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteAlert={setOpenDeleteAlert}
      />
    ))}
  </main>
);

export default TaskList;
